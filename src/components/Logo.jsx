export function Logo() {
  return (
    <div className="logo rounded-half w-12 h-12 p-2 rounded-full bg-neutral-50" >
      <img loading="lazy" src={require("../static/images/logo.png")} alt="logo" />
    </div>
  );
};