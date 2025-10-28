export interface Patch {
  id: string;
  name: string;
  image: string;
  description: string;
  awardDate: string;
  uniformPlacement: {
    area: string;
    position: string;
    coordinates: {
      top: number;
      left: number;
    };
  };
  criteria: string[];
}
