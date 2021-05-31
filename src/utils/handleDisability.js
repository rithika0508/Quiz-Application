const handleDisability = (bool) => {
    const btn = document.getElementsByClassName('option');
    btn[0].disabled = bool;
    btn[1].disabled = bool;
    btn[2].disabled = bool;
    btn[3].disabled = bool;
  }
export { handleDisability };