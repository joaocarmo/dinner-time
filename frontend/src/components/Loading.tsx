import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Loading = () => (
  <div className="flex space-x-2">
    <FontAwesomeIcon
      className="group inline-flex items-center h-6 font-semibold text-blue-300 text-md"
      icon={solid('circle-notch')}
      spin
    />
    <div className="group inline-flex items-center h-6 font-semibold text-md ">
      Loading...
    </div>
  </div>
)

export default Loading
