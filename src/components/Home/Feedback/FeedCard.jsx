export const FeedCard = () => {
  const card = [
    {
      title: "Amazing Service",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis ac justo consequat feugiat.",
      name: "- John Doe",
      id: 1,
    },
    {
      title: "Great Experience",
      feedback:
        "Nullam rutrum ipsum id nunc volutpat, non condimentum odio hendrerit. Duis nec nulla ac libero luctus suscipit.",
      name: "- Jane Smith",
      id: 2,
    },
    {
      title: "Highly Recommended",
      feedback:
        "Fusce vitae mauris ullamcorper, interdum metus in, tincidunt eros. Integer eget lorem ac dui condimentum blandit.",
      name: "- Michael Johnson",
      id: 3,
    },
  ];

  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 to-neutral-900/0"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-white z-10">
          <p className="text-3xl font-semibold">{card.title}</p>
          <p className="text-lg">{card.feedback}</p>
          <p className="text-sm text-neutral-300 mt-2">{card.name}</p>
        </div>
      </div>
    </div>
  );
};
