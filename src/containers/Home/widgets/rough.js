{/* <button className="bg-black text-white" onClick={nextSlide}>
{"Next"}
</button>
<button className="bg-black text-white" onClick={prevSlide}>
{"Previous"}
</button>
<ProductSlider>
{cardArr.map((card, index) => {
  return (
    <div className={` ${index === current ? 'opacity-100 duration-150 translate-x-0' : 'opacity-100 duration-100 translate-x-32'} flex pb-1`} key={index}>
      <Card
        className="w-[155px] mr-3 bg-green "
        productName={"Jack Daniel's Tennessee Whiskey"}
        price={"29.90"}
        marketPrice={"32.90"}
        weight={"70cl"}
        productRate={"42.70l"}
        productImg={jackDaniel}
        iconName={plusIcon}
        deleteIcon={deleteIcon}
      />
    </div>
  );
})}
</ProductSlider> 
  const cardArr = [...Array(12)];
  const length = cardArr.length
  console.log(length, "length");
  const [current, setCurrent] = useState(0)
  const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
}
  console.log(current, 'current')
  if(!Array.isArray(cardArr) || length <= 0){
    return null;
  }
*/}