import React from 'react'
import './Hero.css'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>FOR EVERY STYLE</h2>
                <div>
                <div className='hero-hand-icon'>
                    <p>Every Mood</p>
                    <img src="./src/assets/logo/emoji1.png" alt="emoji" />
                </div>
                <p> New Collections </p>
                <p>Just for You.</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collections</div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMZJREFUSEvtlE0KwjAQhb/eQXDvpndQ0OuI24I3EfeCBxHEMwh6AGnBK2gHKkTEzA8WN802yXx5b96koOdV9FyfAaA6HLFoDeyAm1od3D1YARvgAswtEK+CMXBqFUyAKzAFmpwSL0BqpZBzp+QrJAJ4QQ5ACWQhUYBARsBRg+QAD0tKkjOiZAbc03u/Bkiy3vrxV4tyDpn8lwIRBRJTU4IiANcMRADLdtC2XfYXQK0lLWJRBewt/1BEgfbgj/2IAhdkAKh2PQESzCgZeI9igwAAAABJRU5ErkJggg=="/>
                </div>
            </div>
            <div className="hero-right">
                <DotLottieReact
      src="https://lottie.host/f4f64d9a-f45c-4370-a431-d0e99948355a/OfaLVAoszv.lottie"
      loop
      autoplay
    />
            </div>
        </div>
    )
}

export default Hero