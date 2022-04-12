import type { FC } from 'react'
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
  <div className="my-4 flex rounded bg-slate-100 font-sans">
    <div className="relative w-48 flex-none">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full rounded object-cover"
      />
    </div>
    <form className="flex-auto p-6">
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-lg font-semibold text-slate-900">
          {title}
        </h1>
        <div className="text-lg font-semibold text-slate-500">{ratings}</div>
        <div className="mt-2 w-full flex-none text-sm font-medium text-slate-700">
          {author}
        </div>
      </div>
      <div className="mt-4 mb-6 flex space-x-4 text-sm font-medium">
        <div className="flex flex-auto space-x-4">
          <div className="h-10 rounded-md bg-black px-6 text-center font-semibold text-white">
            Prep Time
            <br />
            {`${prep_time} min`}
          </div>
          <div className="h-10 rounded-md border border-slate-200 px-6 text-center font-semibold text-slate-900">
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
