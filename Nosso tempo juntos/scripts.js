const dataConheceu = new Date("2024-02-01T00:00:00"); // Data do encontro
const dataNamoro = new Date("2024-04-06T00:00:00"); // Data do início do namoro

// Função para calcular a diferença entre duas datas em dias totais
function calcularTempoDetalhado(dataInicio, dataFim) {
  const difMilissegundos = dataFim - dataInicio; // Diferença em milissegundos

  const dias = Math.floor(difMilissegundos / (1000 * 60 * 60 * 24)); // Dias
  const horas = Math.floor(difMilissegundos / (1000 * 60 * 60)); // Horas totais
  const minutos = Math.floor(difMilissegundos / (1000 * 60)); // Minutos totais
  const segundos = Math.floor(difMilissegundos / 1000); // Segundos totais

  // Calcula o restante após converter para dias, horas, minutos e segundos
  const horasRestantes = horas % 24;
  const minutosRestantes = minutos % 60;
  const segundosRestantes = segundos % 60;

  return {
    dias,
    horasTotal: horas,
    minutosTotal: minutos,
    segundosTotal: segundos,
    horasRestantes,
    minutosRestantes,
    segundosRestantes,
  };
}

// Função para converter dias em meses (aproximadamente) e exibir anos quando necessário
function converterEmMeses(dias) {
  const meses = Math.floor(dias / 30); // Calcula os meses (aproximadamente) e arredonda para inteiro
  const anos = Math.floor(dias / 365); // Calcula os anos (aproximadamente) e arredonda para inteiro

  let mesesRestantes = meses % 12; // Restante de meses após calcular os anos

  return {
    meses: mesesRestantes,
    anos: anos,
  };
}

// Função para exibir os tempos calculados
function calcularTempo() {
  const agora = new Date(); // Pega a data e hora atuais

  // Calcula o tempo total em dias, horas, minutos e segundos desde o encontro
  const {
    dias: diasDesdeEncontro,
    horasTotal: horasDesdeEncontro,
    minutosTotal: minutosDesdeEncontro,
    segundosTotal: segundosDesdeEncontro,
    horasRestantes,
    minutosRestantes,
    segundosRestantes,
  } = calcularTempoDetalhado(dataConheceu, agora);
  const { meses: mesesDesdeEncontro, anos: anosDesdeEncontro } =
    converterEmMeses(diasDesdeEncontro);

  // Exibe o total de dias, meses, anos, horas, minutos e segundos desde o encontro
  document.getElementById("tempo-encontro").innerHTML = `
        Dias: ${diasDesdeEncontro} <br>
        Meses: ${mesesDesdeEncontro} <br>
        ${
          anosDesdeEncontro >= 1 ? "Anos: " + anosDesdeEncontro + " ano(s)" : ""
        }
        <br>Horas: ${horasDesdeEncontro} <br>
        Minutos: ${minutosDesdeEncontro} <br>
        Segundos: ${segundosDesdeEncontro} <br>
    `;

  // Calcula o tempo total em dias, horas, minutos e segundos desde o namoro
  const {
    dias: diasDesdeNamoro,
    horasTotal: horasDesdeNamoro,
    minutosTotal: minutosDesdeNamoro,
    segundosTotal: segundosDesdeNamoro,
    horasRestantes: horasRestantesNamoro,
    minutosRestantes: minutosRestantesNamoro,
    segundosRestantes: segundosRestantesNamoro,
  } = calcularTempoDetalhado(dataNamoro, agora);
  const { meses: mesesDesdeNamoro, anos: anosDesdeNamoro } =
    converterEmMeses(diasDesdeNamoro);

  // Exibe o total de dias, meses, anos, horas, minutos e segundos desde o namoro
  document.getElementById("tempo-namoro").innerHTML = `
        Dias: ${diasDesdeNamoro} <br>
        Meses: ${mesesDesdeNamoro} <br>
        ${anosDesdeNamoro >= 1 ? "Anos: " + anosDesdeNamoro + " ano(s)" : ""}
        <br>Horas: ${horasDesdeNamoro} <br>
        Minutos: ${minutosDesdeNamoro} <br>
        Segundos: ${segundosDesdeNamoro} <br>
       
    `;
}

// Atualiza o tempo a cada segundo
setInterval(calcularTempo, 1000);
