import * as THREE from 'three';

function starbase(color, wireframe) {
    const geo = new THREE.IcosahedronGeometry(50);
    const mat = new THREE.MeshStandardMaterial({
        color: color ? color : 0x888888,
        wireframe: false,
    });
    const base = new THREE.Mesh(geo, mat);
    //
    if (wireframe) {
        const geoW = new THREE.EdgesGeometry(geo);
        const matW = new THREE.LineBasicMaterial({
            color: wireframe,
        });
        const wf = new THREE.LineSegments(geoW, matW);
        base.add(wf);
    }

    return base;
}

function star(radius, color) {
    const col = color ? color : 0xffffff;
    //
    const res = 20;
    const geo = new THREE.SphereGeometry(radius ? radius : 1, res, res);
    const mat = new THREE.MeshBasicMaterial({
        color: col,
    });
    const base = new THREE.Mesh(geo, mat);
    //
    const light = new THREE.PointLight(col, 1);
    base.add(light);

    return base;
}

function background() {
    const base = new THREE.Object3D();
    Array(300)
        .fill()
        .forEach(() => {
            const geo = new THREE.SphereGeometry(10, 20, 20);
            const mat = new THREE.MeshBasicMaterial({
                color: 0xffffff,
            });
            const mesh = new THREE.Mesh(geo, mat);
            const dist = 5000;
            const theta = THREE.MathUtils.randFloat(0, 2 * Math.PI);
            const phi = THREE.MathUtils.randFloat(0, Math.PI);
            mesh.position.set(
                dist * Math.sin(phi) * Math.cos(theta),
                dist * Math.cos(phi),
                dist * Math.sin(phi) * Math.sin(theta)
            );
            base.add(mesh);
        });
    return base;
}

export { starbase, star, background };
