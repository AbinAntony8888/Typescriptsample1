type THead = {
  head: string;
};
function Heading({ head }: THead) {
  return (
    <div>
      <h1 className="text-green-700 text-3xl ">{head}</h1>
    </div>
  );
}
export default Heading;
