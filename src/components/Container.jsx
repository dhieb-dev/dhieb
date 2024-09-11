export function Container({children, styles}) {
  return (
    <div className={`mx-auto px-4 container lg:w-[1150px] ${styles ? styles : ""}`}>
      {children}
    </div>
  );
};