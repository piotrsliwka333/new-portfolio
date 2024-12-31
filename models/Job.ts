interface Position {
  name: string;
  workDimension: string;
  period: string;
}

interface Description {
  title: string;
  points: string[];
}

interface Job {
  link: string;
  logo: string;
  name: string;
  totalWorkTime: string;
  address: string;
  positions: Position[];
  description: Description;
}
