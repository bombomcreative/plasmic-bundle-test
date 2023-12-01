import React, { useRef, useState, useEffect, useContext } from "react";
import styles from './HeroScroller.module.css'
import { create } from '@lottiefiles/lottie-interactivity';
import { motion, useScroll, useTransform} from "framer-motion";
import { PlasmicCanvasContext } from '@plasmicapp/loader-nextjs';

export interface HeroScrollerProps {
	className?: string
	
}


export function Test({className}:HeroScrollerProps) {

    useEffect(()=> {
        console.log(motion, useScroll, useTransform, PlasmicCanvasContext, create,)
    }, [motion, useScroll, useTransform, PlasmicCanvasContext, create,])

    return (
        <div>Hello world</div>
    )

}