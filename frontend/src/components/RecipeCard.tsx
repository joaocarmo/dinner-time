import type { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import type { Recipe } from '../api/fetchRecipes'

type RecipeProps = {
  data: Recipe
}

const RecipeCard: FC<RecipeProps> = ({
  data: {
    title,
    author,
    image,
    ratings,
    category,
    cuisine,
    prep_time,
    cook_time,
  },
}) => (
  <div className="flex my-4 font-sans bg-slate-100 rounded">
    <div className="relative flex-none w-48">
      <img
        src={image}
        alt=""
        className="object-cover absolute inset-0 w-full h-full rounded"
      />
    </div>
    <form className="flex-auto p-6">
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-lg font-semibold text-slate-900">
          {title}
        </h1>
        <div className="text-lg font-semibold text-slate-500 align-middle">
          <span>{ratings}</span>{' '}
          <FontAwesomeIcon icon={solid('star')} className="text-yellow-400" />
        </div>
        <div className="flex-none mt-2 w-full text-sm font-medium text-slate-700">
          {author}
        </div>
      </div>
      <div className="flex mt-4 mb-6 space-x-4 text-sm font-medium">
        <div className="flex flex-wrap flex-auto space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex px-6 min-h-min font-semibold text-center text-white bg-black rounded-md">
            Prep Time
            <br />
            {`${prep_time} min`}
          </div>
          <div className="flex px-6 min-h-min font-semibold text-center text-slate-900 rounded-md border border-slate-200">
            Cook Time
            <br />
            {`${cook_time} min`}
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-700">
        {category}
        {cuisine ? ` · ${cuisine}` : ''}
      </p>
    </form>
  </div>
)

export default RecipeCard
