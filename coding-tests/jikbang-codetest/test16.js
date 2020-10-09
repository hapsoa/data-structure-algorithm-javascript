function setup() {
  // Write your code here.
  console.log(document);
}

// Example case.
document.body.innerHTML = `
<table id="card-container">
  <tbody>
    <tr>
      <td class="card">down</td>
      <td class="card">up</td>
    </tr>
    <tr>
      <td class="card">down</td>
      <td class="card">down</td>
    </tr>
  </tbody>
</table>`;

setup();

document.getElementsByClassName('card')[0].click();
console.log(document.body.innerHTML);
