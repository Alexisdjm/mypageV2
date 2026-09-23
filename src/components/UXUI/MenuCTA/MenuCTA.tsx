type MenuCTAProps = {
  open: boolean;
  onToggle: () => void;
};

export function MenuCTA({ open, onToggle }: MenuCTAProps) {
  return (
    <label className="flex w-8 cursor-pointer flex-col gap-2 text-white xl:hidden">
      <input
        className="peer sr-only"
        type="checkbox"
        checked={open}
        onChange={onToggle}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      />
      <div className="h-[3px] w-1/2 origin-right rounded-2xl bg-current duration-500 peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px] peer-checked:rotate-[225deg]" />
      <div className="h-[3px] w-full rounded-2xl bg-current duration-500 peer-checked:-rotate-45" />
      <div className="h-[3px] w-1/2 origin-left place-self-end rounded-2xl bg-current duration-500 peer-checked:translate-x-[12px] peer-checked:translate-y-[1px] peer-checked:rotate-[225deg]" />
    </label>
  );
}
