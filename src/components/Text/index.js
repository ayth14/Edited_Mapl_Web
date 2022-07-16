const PrimaryText = (props) => {
  return (
    <span
      style={{ ...PrimaryTextStyle, ...props.style }}
      className={`${props.className}`}
    >
      {props.children}
    </span>
  );
};

const SecondaryText = (props) => {
  return (
    <span
      style={{ ...SecondaryTextStyle, ...props.style }}
      className={`${props.className} leading-3`}
    >
      {props.children}
    </span>
  );
};

const TertiaryText = (props) => {
  return (
    <span
      style={{fontSize: '14px', ...TertiaryTextStyle, ...props.style }}
      className={`${props.className}  text-[10px] md:text-[32px] lg:text-[42px]`}
    >
      {props.children}
    </span>
  );
};

const TertiarySemiBoldText = (props) => {
  return (
    <span
      style={{ ...TertiarySemiBoldTextStyle, ...props.style }}
      className={`${props.className}  text-[10px] md:text-[32px] lg:text-[42px]`}
    >
      {props.children}
    </span>
  );
};

const TertiaryBoldText = (props) => {
  return (
    <span
      style={{ ...TertiaryBoldTextStyle, ...props.style }}
      className={`${props.className}  text-[18px] md:text-[26px] lg:text-[32px] xl:text-[40px]`}
    >
      {props.children}
    </span>
  );
};

const HeadingText = (props) => {
  return (
    <span
      style={{ ...HeadingTextStyle, ...props.style }}
      className={`${props.className} text-[16px] md:text-[20px] lg:text-[26px]`}
    >
      {props.children}
    </span>
  );
};

const Plain = (props) => {
  return (
    <span
      style={{ ...PlainTextStyle, ...props.style }}
      className={`${props.className} text-[11px] md:text-[12px] lg:text-[14px]`}
    >
      {props.children}
    </span>
  );
};

const PlainSm = (props) => {
  return (
    <span
      style={{ ...PlainSmTextStyle, ...props.style }}
      className={`${props.className} text-[10px]`}
    >
      {props.children}
    </span>
  );
};

const Basic = (props) => {
  return (
    <span
      style={{ ...BasicTextStyle, ...props.style }}
      className={`${props.className} text-[11px] md:text-[12px] lg:text-[14px]`}
    >
      {props.children}
    </span>
  );
};

const BasicSemiBold = (props) => {
  return (
    <span
      style={{ ...BasicSemiBoldTextStyle, ...props.style }}
      className={`${props.className} text-[11px] md:text-[12px] lg:text-[14px]`}
    >
      {props.children}
    </span>
  );
};

const BasicBold = (props) => {
  return (
    <span
      style={{ ...BasicBoldTextStyle, ...props.style }}
      className={`${props.className} text-[11px] md:text-[12px] lg:text-[14px]`}
    >
      {props.children}
    </span>
  );
};

const PrimaryTextStyle = {
};

const SecondaryTextStyle = {
  letterSpacing: 0.5,
};

const TertiaryBoldTextStyle = {
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "700",
};

const TertiarySemiBoldTextStyle = {
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "600",
};

const TertiaryTextStyle = {
  fontFamily: "Raleway, sans-serif",
  fontWeight: "500",
};

const HeadingTextStyle = {
  fontFamily: "Raleway, sans-serif",
  fontWeight: "700",
  letterSpacing: "-1.25",
};

const PlainTextStyle = {
  fontFamily: "Open Sans, sans-serif",
  fontWeight: "400",
};

const PlainSmTextStyle = {
  fontFamily: "Heebo , sans-serif",
  fontWeight: "400",
};
const BasicTextStyle = {
  fontFamily: "Segoe UI, sans-serif",
  fontWeight: "400",
};

const BasicSemiBoldTextStyle = {
  fontFamily: "Segoe UI, sans-serif",
  fontWeight: "600",
};

const BasicBoldTextStyle = {
  fontFamily: "Segoe UI, sans-serif",
  fontWeight: "700",
};

export {
  PrimaryText,
  SecondaryText,
  TertiaryText,
  TertiarySemiBoldText,
  TertiaryBoldText,
  HeadingText,
  Plain,
  PlainSm,
  Basic,
  BasicSemiBold,
  BasicBold,
};
