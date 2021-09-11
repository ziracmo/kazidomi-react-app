import { StarIcon } from '@heroicons/react/solid';

import { Rating } from '../models/product';

type Props = {
  rating: Rating;
};

const RatingStars = (props: Props) => (
  <div className="flex items-center justify-start my-2">
    {Array.from({ length: props.rating.rate }, (_v, i) => i).map((v) => (
      <StarIcon key={v} className="text-yellow-400 h-4" />
    ))}

    {props.rating ? (
      <span className="ml-1">({props.rating.count} votes)</span>
    ) : null}
  </div>
);

export default RatingStars;
