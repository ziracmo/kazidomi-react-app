import { StarIcon } from '@heroicons/react/solid';

type Props = {
  rate: number;
};

const Rating = (props: Props) => (
  <div className="flex my-2">
    {Array.from({ length: props.rate }, (_v, i) => i).map((v) => (
      <StarIcon key={v} className="text-yellow-400 h-4" />
    ))}
  </div>
);

export default Rating;
