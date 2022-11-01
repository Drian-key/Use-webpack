import _ from "lodash";

const mahasiswa = [
  { nama: "drian", email: "r@d.p", jurusan: "ti" },
  { nama: "yoda", email: "r@f.s", jurusan: "ibs" },
  { nama: "basa", email: "j@k.n", jurusan: "men" },
];

const mhs = _.find(mahasiswa, { nama: "drian" });

console.log(mhs);
