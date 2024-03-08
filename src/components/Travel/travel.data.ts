export interface ITravel {
  id: number;
  title: string;
  date: string;
  image: string;
}

export const TravelData: ITravel[] = [
  {
    id: 0,
    title: "Потрясающая Грузия",
    date: "01.01.2018-25.01.2018",
    image: "/src/assets/1.jpg",
  },
  {
    id: 1,
    title: "Трекинг по Кавказу",
    date: "07.06.2018-15.06.2018",
    image: "/src/assets/2.jpg",
  },
  {
    id: 2,
    title: "Тур на аляску",
    date: "12.08.2018-23.08.2018",
    image: "/src/assets/3.jpg",
  },
  {
    id: 3,
    title: "Велотур по восточному Непалу",
    date: "03.09.2018-14.09.2018",
    image: "/src/assets/4.jpg",
  },
  {
    id: 4,
    title: "Каякинг на реке Санда",
    date: "20.11.2018-30.11.2018",
    image: "/src/assets/5.jpg",
  },
  {
    id: 5,
    title: "Пеший тур по карпатам",
    date: "12.12.2018-23.12.2018",
    image: "/src/assets/6.jpg",
  },
];
