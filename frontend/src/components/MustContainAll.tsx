import type { ChangeEventHandler } from 'react'

type MustContainAllProps = {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

const MustContainAll = ({ checked, onChange }: MustContainAllProps) => (
  <div className="flex relative mb-12 align-middle bg-white pointer-events-auto">
    <input
      checked={checked}
      className="flex self-center"
      id="must-contain-all"
      name="must-contain-all"
      onChange={onChange}
      type="checkbox"
    />
    <label
      htmlFor="must-contain-all"
      className="flex self-center pl-2 text-sm font-medium text-slate-700"
    >
      Must contain all
    </label>
  </div>
)

MustContainAll.defaultProps = {
  checked: false,
}

export default MustContainAll
