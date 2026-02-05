import { useEffect, useRef } from "react";

function CursorCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
        let particles = [];

        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            particles.push({
                x: mouse.x,
                y: mouse.y,
                radius: 20,
                alpha: 1,
            });
        });

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                p.radius += 0.3;
                p.alpha -= 0.02;

                if (p.alpha <= 0) particles.splice(i, 1);

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 200, 255, ${p.alpha})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return <canvas ref={canvasRef} className="cursor-canvas"></canvas>;
}

export default CursorCanvas;
