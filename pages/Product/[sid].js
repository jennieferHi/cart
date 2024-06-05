
import styled from "styled-components";
// import Footer from "../components/Footer"; 
import Newsletter from "@/components/Newsletter";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image'
import { popularProducts } from "@/public/data"
const Container = styled.div``;
import { useBuy } from "@/hooks/use-buy"

const Wrapper = styled.div`
  height:80vh;
  padding: 50px;
  display: flex; 
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px; 
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between; 
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   border:2px solid red;
//   margin: 0px 5px;
//   cursor: pointer;
// `;

const FilterColor = styled.p(({ color, selected }) => ({
  backgroundColor: color,
  width: "100px",
  height: "100px",
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  border: selected ? "3px solid red" : "0",
  margin: " 0px 5px",
  cursor: " pointer"
}));
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [add, setAdd] = useState(1); 
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("XS");
  const { addProductHandler,product } = useBuy();
  useEffect(() => {
    if (!router.isReady) return;
    const sid = router.query.sid;
    const res = popularProducts.filter((v) => sid == v.id);
    setData(res[0]);
  }, [router])
  const buyHandler = () => {  
    // console.log({...data,color,size,add})
    addProductHandler({...data,color,size,add:parseInt(add)});
  }
  return (
    <Container>
      <Wrapper> 
        <ImgContainer>
          <Image
            src={data.src}
            width={500}
            height={300}
            className="imgAuto"
          />
        </ImgContainer>
        <InfoContainer>
          <Title>{data.name}</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>{data.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle> 
              <FilterColor color="black" selected={color=="black"?true:false} onClick={()=>color!="black"?setColor("black"):""}  />
              <FilterColor color="darkblue" selected={color=="darkblue"?true:false} onClick={()=>color!="darkblue"?setColor("darkblue"):""}    />
              <FilterColor color="gray" selected={color=="gray"?true:false} onClick={()=>color!="gray"?setColor("gray"):""}  />

            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize style={{ "cursor": "pointer" }}>
                <FilterSizeOption onClick={()=>color!="XS"?setSize("XS"):""} >XS</FilterSizeOption>
                <FilterSizeOption onClick={()=>color!="S"?setSize("S"):""} >S</FilterSizeOption>
                <FilterSizeOption onClick={()=>color!="M"?setSize("M"):""} >M</FilterSizeOption>
                <FilterSizeOption onClick={()=>color!="L"?setSize("L"):""} >L</FilterSizeOption>
                <FilterSizeOption onClick={()=>color!="XL"?setSize("XL"):""} >XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <span style={{ "cursor": "pointer" }} onClick={() => setAdd(add + 1)}>+</span>
              <Amount>{add}</Amount>
              <span style={{ "cursor": "pointer" }} onClick={() => { if (add >= 2) setAdd(add - 1) }}>-</span>
            </AmountContainer>
            <Button onClick={buyHandler}>加入購物車</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;