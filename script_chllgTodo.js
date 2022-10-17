const table = document.getElementById("listTodo");
let submitBtn = document.getElementById("submitBtn");
let namaInput = document.getElementById("nama");
let nimInput = document.getElementById("nim");
let prodiInput = document.getElementById("prodii");
let i = 1;
let editMode = false;
let updatedId = "";

const remove = (id) => {
  if (editMode) {
    alert(
      "Maaf tidak bisa delete, selesaikan proses edit anda!"
    );
  } else {
    const value = document.getElementById(id);
    value.remove();
  }
};

const update = (id) => {
  editMode = true;
  submitBtn.innerText = "Ubah";
  updatedId = id;
  const namaa = document.getElementById(`namaa-${id}`).innerText;
  const nimm = document.getElementById(`nimm-${id}`).innerText;
  const prd = document.getElementById(`prd-${id}`).innerText;

  namaInput.value = namaa;
  nimInput.value = nimm;
  prodiInput.value = prd;
};

addEventListener("submit", (event) => {
  event.preventDefault();

  if (editMode) {
    const namaa = document.getElementById(`namaa-${updatedId}`);
    const nimm = document.getElementById(`nimm-${updatedId}`);
    const prd = document.getElementById(`prd-${updatedId}`);

    namaa.innerText = namaInput.value;
    nimm.innerText = nimInput.value;
    prd.innerText = prodiInput.value;
    submitBtn.innerText = "Tambah";
    editMode = false;
    namaInput.value = "";
    nimInput.value = "";
    prodiInput.value = "";
  } else {
    const uuid = Math.random();

    const tableContent = `
              <tr id='${uuid}'>
                  <th scope="row">${i++}</th>
                  <td id='namaa-${uuid}'>${namaInput.value}</td>
                  <td id='nimm-${uuid}'>${nimInput.value}</td>
                  <td id='prd-${uuid}'>${prodiInput.value}</td>
                  <td>
                        <button type="button" class="btn btn-danger" onclick='remove(${uuid})'>
                            Delete
                        </button>
                        <button type="button" class="btn btn-primary" onclick='update(${uuid})'>
                            Update
                        </button>
                  </td>
              </tr>
            `;

    table.innerHTML += tableContent;
    namaInput.value = "";
    nimInput.value = "";
    prodiInput.value = "";
  }
});