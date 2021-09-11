type Props = {
  text: string;
};

const Title = (props: Props) => (
  <div className="pt-5 mx-auto">
    <div className="flex flex-wrap w-full mb-4 p-4 pl-0">
      <div className="w-full mb-6 lg:mb-0">
        <h1 className="sm:text-4xl text-5xl font-bold mb-2 text-gray-900">
          {props.text}
        </h1>
        <div className="h-1 w-20 bg-green-400 rounded"></div>
      </div>
    </div>
  </div>
);

export default Title;
