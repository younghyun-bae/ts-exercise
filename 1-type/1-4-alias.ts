{
  // Type Aliases - Defining new type
  type Text = string;
  const name: Text = 'Younghyun';
  const address: Text = 'Korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'Younghyun',
    age: 26,
  };

  // String Literal Types
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true; // looks weird but works anyways
}