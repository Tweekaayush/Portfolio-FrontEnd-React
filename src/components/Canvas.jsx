import React, {useRef, useEffect} from "react";
import "./Canvas.css";

function Canvas(props){

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var particlesArray = [];

        window.addEventListener("resize", ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;    
        });

        const mouse = {
            x: undefined,
            y: undefined
        }

        class Particle{
            constructor(){
                this.x = mouse.x;
                this.y = mouse.y;
                this.size = Math.random()*5 + 1;
                this.speedX = Math.random() *3 - 1.5;
                this.speedY = Math.random() *3 - 1.5;
                this.r = Math.ceil(Math.random() * 255 + 1);
                this.g = Math.ceil(Math.random() * 255 + 1);
                this.b = Math.ceil(Math.random() * 255 + 1);
                this.color = String("rgb("+this.r+","+this.g+","+this.b+")");
            }

            update(){
                this.x += this.speedX;
                this.y += this.speedY;
                if(this.size > 0.2) this.size -= 0.1;
            }
            
            draw(){
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function handleParticles(){
            for(let i = 0; i < particlesArray.length; i++){
                particlesArray[i].update();
                particlesArray[i].draw();
                if(particlesArray[i].size <= 0.3){
                    particlesArray.splice(i, 1);
                    i--;
                }
            }
        }

        canvas.addEventListener("mousemove", (e)=>{
            mouse.x = e.x;
            mouse.y = e.y;
            for(let i = 0; i < 10; i++){
                particlesArray.push(new Particle());
            }
        });

        

        function animate(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            handleParticles();
            requestAnimationFrame(animate);
        }
        animate();

      }, [])


    return <canvas id="canvas" ref={canvasRef} {...props}></canvas>;
}

export default Canvas;