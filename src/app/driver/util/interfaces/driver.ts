export interface Driver {
  id: number;

  firstName: string;

  description: string;

  license: false;

  email: string;

  dataOfBirth: string;

  classOfDriver: string;

  location: Location;
}

export interface Location {
  city: string;

  zipCode: string;

  phone: string;

}

export interface Pagination {
  items: number;

  page: number;
}
