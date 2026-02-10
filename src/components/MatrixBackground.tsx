import { useEffect, useRef } from 'react';

const MatrixBackground = ({ opacity = 0.15 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Set canvas dimensions
        canvas.width = width;
        canvas.height = height;

        // Configuration
        const fontSize = 16;
        const columns = Math.ceil(width / fontSize);
        const drops: number[] = new Array(columns).fill(1); // Y-coordinate of each drop

        const chars = "4"; // The matrix character

        const draw = () => {
            // Fade out the previous frame to create trails
            // We use 'destination-out' to fade existing pixels to transparent
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillRect(0, 0, width, height);

            // Reset to default for drawing text
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = '#ff4d4d'; // Brighter red
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars;
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Draw the character
                // Random opacity for glitch effect
                ctx.globalAlpha = Math.random() > 0.95 ? 1 : 0.8;
                ctx.fillText(text, x, y);
                ctx.globalAlpha = 1;

                // Reset drop if it goes off screen (randomly)
                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Increment Y coordinate
                drops[i]++;
            }
        };

        // Animation Loop
        let animationFrameId: number;
        const interval = 50; // Control speed
        let lastTime = 0;

        const animate = (time: number) => {
            if (time - lastTime > interval) {
                draw();
                lastTime = time;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        // Handle Resize
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            // Re-initialize drops to fit new width
            const newColumns = Math.ceil(width / fontSize);
            // Preserve existing drops if possible, or fill new ones
            if (newColumns > drops.length) {
                const added = new Array(newColumns - drops.length).fill(0);
                drops.push(...added);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ opacity }}
        />
    );
};

export default MatrixBackground;
