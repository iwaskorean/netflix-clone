// Have to Fix type annotation for series and flims objects

export default function selectionFilter({
  series,
  films,
}: {
  series: any;
  films: any;
}) {
  return (
    series &&
    films && {
      series: [
        {
          title: '다큐멘터리',
          data: series.filter((item: any) => item.genre === 'documentaries'),
        },
        {
          title: '코미디',
          data: series.filter((item: any) => item.genre === 'comedies'),
        },
        {
          title: '어린이',
          data: series.filter((item: any) => item.genre === 'children'),
        },
        {
          title: '범죄',
          data: series.filter((item: any) => item.genre === 'crime'),
        },
        {
          title: '기분 좋아지는',
          data: series.filter((item: any) => item.genre === 'feel-good'),
        },
      ],

      films: [
        {
          title: '드라마',
          data: films.filter((item: any) => item.genre === 'drama'),
        },
        {
          title: '스릴러',
          data: films.filter((item: any) => item.genre === 'thriller'),
        },
        {
          title: '서스펜스',
          data: films.filter((item: any) => item.genre === 'suspense'),
        },
        {
          title: '어린이',
          data: films.filter((item: any) => item.genre === 'children'),
        },
        {
          title: '로맨스',
          data: films.filter((item: any) => item.genre === 'romance'),
        },
      ],
    }
  );
}
