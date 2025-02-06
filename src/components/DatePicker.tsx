interface DatePickerProps {
  onChange: (date: string) => void;
}
export function DatePicker({ onChange }: DatePickerProps) {
  const handelOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="bg-gray-300 p-3 rounded-xl text-gray-800">
      <input type="date" className="bg-transparent" onChange={handelOnChange} />
    </div>
  );
}
