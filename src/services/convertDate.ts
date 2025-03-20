const convertDate = (date: string | undefined) => {
  if (date) {
    const newDate = new Date(date);

    const formattedDate = newDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  }
};

export default convertDate;
