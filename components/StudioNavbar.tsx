import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-brand flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2" />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault()}</>
    </div>
  );
}

export default StudioNavbar;
