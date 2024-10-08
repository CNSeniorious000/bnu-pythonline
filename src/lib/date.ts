import "dayjs/locale/zh-cn";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

export function fromNow(date: string) {
  return dayjs(date).fromNow();
}
