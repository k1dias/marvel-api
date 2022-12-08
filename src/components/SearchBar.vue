<template>
  <div class="input-group">
    <input
      type="search"
      class="form-control"
      placeholder="Buscar personagem"
    />
    <button type="button" class="btn btn-search">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style lang="scss">
  .input-group{
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .form-control{
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: 0px 0px 0px 1.7px #3D3E42;
    border: 0px solid;
    height: 30px;
    width: 225px;
    background-color: rgb(14, 14, 14);
    color: white;
    outline: none;
  }


  .btn-search{
    border-radius: 10px;
    width: 45px;
    height: 31px;
    border: 0px solid;
    box-shadow: 0px 0px 0px 1.7px #3D3E42;
    background-color: #0d0d0d;
    color: white;
    transition: 400ms;
  }
  .btn-search:hover{
    background-color: #d91828;
    box-shadow: 0px 0px 10px 1px #d91828d7;
    cursor: pointer;
  }
</style>
