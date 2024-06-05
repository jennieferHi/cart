
import Link from 'next/link'
import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "styled-components";
import Product from "./Product/[sid].js";
import ProductLIst from "../components/ProductList/ProductLIst.js";
import styles from "@/styles/Home.module.css";
import Slider from "@/components/Slider";
import Categories from "@/components/Categories";
import Products from "../components/Products";
const inter = Inter({ subsets: ["latin"] });
import Newsletter from "@/components/Newsletter";
const Container1 = styled.div`overflow-x:hidden;width:100vw;padding:30px;`
const Container2 = styled.div`overflow-x:hidden;width:100vw;`
import { ScrollMotionContainer, ScrollMotionItem } from './scroll-motion'
import { motion, AnimatePresence } from "framer-motion"

export default function Index() {
  return (
    <>

      <ScrollMotionContainer
        element="div"
        className="main bg-dark text-secondary px-4 py-5 text-center">
        <Container1>
          <ScrollMotionItem
            element="div"
            type="up"
            className="display-5 fw-bold text-white"
          >
            <AnimatePresence>
            </AnimatePresence>

          </ScrollMotionItem>
          <Slider />
          <ScrollMotionItem
            element="div"
            type="up"
            className="display-5 fw-bold text-white"
          >
            <Products />
          </ScrollMotionItem>
        </Container1>

      </ScrollMotionContainer >
    </>
  );
}
