const fetchData = async () => {
    try {
      const response = await fetch("https://viacep.com.br/ws/01001000/json/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };
  
  fetchData();