/* ============================ INTERFACE LANGUAGE ============================
   The whole interface can be read in Spanish. Rather than threading a language through every
   component, every element passes through one translator: string children and the few
   host-element attributes a person reads (title, placeholder, aria-label). What an agent SAYS is
   never translated — it follows the agent's own language, set on the Voice step — so this table
   holds interface text only. Anything without an entry is left exactly as it was. */
let UI_LANG = 'en';
try { if (typeof localStorage !== 'undefined' && localStorage.getItem('ucx.uiLang') === 'es') UI_LANG = 'es'; } catch (e) {}
const setUiLang = l => { UI_LANG = l === 'es' ? 'es' : 'en';
  try { localStorage.setItem('ucx.uiLang', UI_LANG); } catch (e) {}
  try { document.documentElement.lang = UI_LANG; } catch (e) {} };

const ES = {
  /* shell */
  'Administrator':'Administrador', 'Users':'Usuarios', 'Connectors':'Conectores', 'Campaigns':'Campañas',
  'AI Agents':'Agentes de IA', 'Automations':'Automatizaciones', 'Configuration':'Configuración',
  'Analytics':'Analítica', 'Outbound hub':'Outbound Hub', 'Interactions':'Interacciones', 'Wallboards':'Wallboards',
  'Developer':'Desarrollador', 'Forms':'Formularios', 'Interface language':'Idioma de la interfaz',
  /* agent list */
  'Create agent':'Crear agente', 'Search agents':'Buscar agentes', 'Inbound':'Entrante', 'Outbound':'Saliente',
  'Deployed':'Desplegado', 'credits left · renews':'créditos disponibles · se renueva el', 'of':'de',
  'Deployed before · no dialer is running it now':'Desplegado antes · ningún discador lo usa ahora',
  'It':'El agente', 'in':'en', 'dialers':'discadores',
  /* templates */
  'Lead capture & quotes':'Captación y cotizaciones', 'Appointments':'Citas', 'Messages & callbacks':'Recados y devoluciones',
  'Collections':'Cobranzas', 'Receptionist':'Recepcionista',
  'Calls people who asked about a product, checks what they need and gets them a quote.':'Llama a quienes preguntaron por un producto, averigua qué necesitan y les consigue una cotización.',
  'Confirms, moves and reminds — for clinics, workshops and service visits.':'Confirma, reprograma y recuerda: para clínicas, talleres y visitas técnicas.',
  'Delivers a message, takes one back and agrees when a person will call.':'Entrega un recado, toma otro y acuerda cuándo llamará una persona.',
  'Explains an overdue balance, agrees a payment date and sends the payment link.':'Explica un saldo vencido, acuerda una fecha de pago y envía el enlace de pago.',
  'Answers the company line, greets callers, collects who is calling and why, and passes a summary on.':'Atiende la línea de la empresa, saluda, registra quién llama y por qué, y envía un resumen.',
  'New · inbound only':'Nuevo · solo entrante',
  /* wizard chrome */
  'Agents':'Agentes', 'Draft saved':'Borrador guardado', 'Saving…':'Guardando…', 'Back':'Atrás', 'Continue':'Continuar',
  'Direction & job':'Dirección y tarea', 'Voice':'Voz', 'Scope':'Alcance', 'Rules':'Reglas', 'Test':'Prueba',
  /* step 1 */
  'Who starts the interaction?':'¿Quién inicia la interacción?', 'What job should it do?':'¿Qué tarea debe hacer?',
  'Pick the closest one. Each brings rules already filled in':'Elige la más parecida. Cada una trae reglas ya completadas',
  ', worded for calls coming in':', redactadas para llamadas entrantes',
  'Direction is fixed once an agent exists.':'La dirección queda fija una vez creado el agente.',
  'Something else':'Otra cosa', 'Talk to our team':'Hablar con nuestro equipo',
  'Describe the job in your own words and our team builds the template with you.':'Describe la tarea con tus palabras y nuestro equipo arma la plantilla contigo.',
  'Nothing here is locked in. Every rule a template brings can be changed in step 4.':'Nada queda fijo. Cada regla que trae una plantilla se puede cambiar en el paso 4.',
  'Learn more: AI agent collection prerequisites — list, dialer and disposition requirements':'Más información: requisitos del agente de IA de cobranzas — lista, discador y tipificaciones',
  'Learn more: AI agent collection prerequisites':'Más información: requisitos del agente de IA de cobranzas',
  'AI agent collection prerequisites':'Requisitos del agente de IA de cobranzas', 'Prerequisites':'Requisitos', 'Learn more':'Más información',
  'Four things have to be in place before an agent can take or make interactions. Three of them are set up outside this screen.':'Hay cuatro cosas que deben estar listas antes de que un agente pueda atender o iniciar interacciones. Tres se configuran fuera de esta pantalla.',
  'A dialer to run in':'Un discador donde correr', 'A list of people to call':'Una lista de personas a llamar',
  'Dispositions on the campaign':'Tipificaciones en la campaña', 'Credits on the account':'Créditos en la cuenta',
  'An agent runs inside a dialer. Deploy stays blocked until it is in one, and the agent page says which dialers are running it. Dialers are assigned in the Outbound Hub, not here.':'Un agente corre dentro de un discador. Desplegar queda bloqueado hasta que esté en uno, y la página del agente indica qué discadores lo usan. Los discadores se asignan en el Outbound Hub, no aquí.',
  'An outbound agent calls the contacts in its dialer’s list. Testing never touches that list — a test call rings your own number and nobody else’s.':'Un agente saliente llama a los contactos de la lista de su discador. Las pruebas nunca tocan esa lista: una llamada de prueba suena solo en tu número.',
  'How an interaction is coded when it ends is configured on the campaign, outside the agent. The agent reports what happened; it does not define the codes.':'Cómo se tipifica una interacción al terminar se configura en la campaña, fuera del agente. El agente informa qué pasó; no define los códigos.',
  'Every interaction an agent handles spends credits, and each one reports its own total. What is left is shown on the AI Agents screen.':'Cada interacción que atiende un agente consume créditos, y cada una informa su total. El saldo se muestra en la pantalla de Agentes de IA.',
  'Tell us about the job':'Cuéntanos sobre la tarea', 'Send to my team':'Enviar a mi equipo',
  'Describe the calls you want in your own words. A solutions engineer builds the template with you.':'Describe las llamadas que quieres con tus palabras. Un ingeniero de soluciones arma la plantilla contigo.',
  'We need to call people who missed a delivery and agree a new day…':'Necesitamos llamar a quienes no recibieron una entrega y acordar un nuevo día…',
  /* step 2 */
  'Which language, and whose voice?':'¿Qué idioma y qué voz?',
  'An agent speaks one language. Pick it, then listen to the voices available for that language.':'Un agente habla un solo idioma. Elígelo y escucha las voces disponibles para ese idioma.',
  'Language':'Idioma', 'Sample':'Muestra', 'voices ·':'voces ·', '· sample line':'· frase de muestra',
  'English (United States)':'Inglés (Estados Unidos)', 'Spanish (Latin America)':'Español (Latinoamérica)',
  'English (US)':'Inglés (EE. UU.)', 'Spanish (LATAM)':'Español (LATAM)',
  /* step 3 — the brief */
  'What it will do on every call':'Qué hará en cada llamada',
  'Written out in full. Anything underlined is yours to change — tap it.':'Escrito completo. Todo lo subrayado lo puedes cambiar: tócalo.',
  ', asks what they need, then':', pregunta qué necesitan, luego', ', delivers the message, then':', entrega el recado, luego',
  ', states the date and time, then':', indica la fecha y la hora, luego', 'mentions a complaint':'menciona un reclamo', 'a lawyer':'un abogado',
  '· Call':'· Llamada', 'days':'días',
  'It calls':'Llama a', 'It answers calls to':'Atiende las llamadas de', 'On each one it':'En cada llamada, el agente',
  ', then':', luego', 'then':'luego', ', and':', y', 'and':'y',
  'If someone asks for a person, it':'Si alguien pide hablar con una persona, el agente',
  'people with overdue payments at':'personas con pagos vencidos en', 'people who asked for a quote from':'personas que pidieron una cotización a',
  'customers of':'clientes de', 'people who left a message for':'personas que dejaron un recado a', 'callers of':'quienes llaman a',
  'The name the agent says out loud.':'El nombre que el agente dice en voz alta.',
  'Used in the greeting and the spoken disclosure.':'Se usa en el saludo y en el aviso hablado.',
  'Used in the greeting and the disclosure.':'Se usa en el saludo y en el aviso.',
  'How it opens, before anything else.':'Cómo empieza, antes que nada.',
  'The one thing the call is for.':'Lo único para lo que es la llamada.',
  'The escape hatch. Always available to the caller.':'La salida de emergencia. Siempre disponible para quien llama.',
  'verifies who it is speaking to':'verifica con quién está hablando', 'asks for the person by name':'pregunta por la persona por su nombre',
  'speaks to whoever answers':'habla con quien atienda',
  'On collections calls the agent must establish who it is speaking to. The balance can never be mentioned to anyone else, so there is no option to speak to whoever answers.':'En las llamadas de cobranza el agente debe confirmar con quién habla. El saldo nunca se puede mencionar a otra persona, así que no existe la opción de hablar con quien atienda.',
  'sends a quote by WhatsApp the same day':'envía una cotización por WhatsApp el mismo día', 'books a visit with an advisor':'agenda una visita con un asesor',
  'asks the budget and passes it to sales':'pregunta el presupuesto y lo pasa a ventas', 'confirms or moves the appointment':'confirma o reprograma la cita',
  'only confirms, never reschedules':'solo confirma, nunca reprograma', 'confirms and explains what to bring':'confirma y explica qué traer',
  'agrees a callback time and number':'acuerda hora y número para devolver la llamada', 'delivers the message and ends':'entrega el recado y termina',
  'reads the message back to confirm':'repite el recado para confirmarlo', 'agrees a payment date within':'acuerda una fecha de pago en un plazo de',
  'agrees a partial payment of at least':'acuerda un pago parcial de al menos',
  'verifies when the customer intends to pay':'verifica cuándo el cliente tiene intención de pagar',
  'Goal: records the date the customer gave':'Objetivo: registra la fecha que dio el cliente',
  'collects the caller’s details and confirms them back':'registra los datos de quien llama y los confirma',
  'books an appointment from the connected calendar':'agenda una cita en el calendario conectado',
  'answers questions from the business profile, then takes a message':'responde preguntas con el perfil de la empresa y luego toma un recado',
  'takes a message':'toma un recado', 'books appointments':'agenda citas', 'answers questions from the business profile':'responde preguntas con el perfil de la empresa',
  'Days to pay':'Días para pagar', 'Minimum share':'Porcentaje mínimo', 'Custom':'Personalizado',
  'Custom days to pay':'Días para pagar, personalizado', 'Custom minimum share':'Porcentaje mínimo, personalizado',
  'How long the customer gets before the date it agrees.':'Cuánto tiempo tiene el cliente hasta la fecha que acuerda.',
  'The smallest part of the balance the agent may accept.':'La parte más pequeña del saldo que el agente puede aceptar.',
  'transfers to a campaign':'transfiere a una campaña', 'takes a message and ends the call':'toma un recado y termina la llamada',
  'Campaign':'Campaña',
  'A transfer goes to the people working that campaign. Taking a message ends the call and sends your team what it collected.':'Una transferencia va a las personas que trabajan esa campaña. Tomar un recado termina la llamada y envía a tu equipo lo que recogió.',
  'Transfer puts the caller through live, to the people working that campaign. Taking a message ends the call and sends your team what it collected.':'Transferir pasa la llamada en vivo a las personas que trabajan esa campaña. Tomar un recado termina la llamada y envía a tu equipo lo que recogió.',
  'states the amount owed':'indica el monto adeudado', 'says only that there is an outstanding balance':'solo dice que hay un saldo pendiente',
  'What it tells the right person about the balance.':'Qué le dice a la persona correcta sobre el saldo.',
  'Either way the balance is only ever discussed with the intended person. The real amount comes from the campaign’s contact list;':'En cualquier caso, el saldo solo se habla con la persona indicada. El monto real viene de la lista de contactos de la campaña;',
  'stands in for it here.':'lo reemplaza aquí.',
  'sends the payment link to the contact channel on file, without saying which':'envía el enlace de pago al canal de contacto registrado, sin decir cuál',
  'tells the customer where to pay':'le dice al cliente dónde pagar',
  'How the customer pays once a date is agreed.':'Cómo paga el cliente una vez acordada la fecha.',
  'Where to pay':'Dónde pagar', 'Any Banco Sol branch, or the app':'Cualquier sucursal de Banco Sol, o la app',
  'It opens the same way every time — first the disclosure, which cannot be removed:':'Siempre empieza igual: primero el aviso, que no se puede quitar:',
  'It opens the same way every time — first the disclosure, which cannot be removed, only reworded:':'Siempre empieza igual: primero el aviso, que no se puede quitar, solo cambiar de redacción:',
  'Required by law — cannot be removed':'Exigido por ley: no se puede quitar', 'Required disclosure — cannot be removed':'Aviso obligatorio: no se puede quitar',
  'Required on every call — choose the wording, it cannot be removed':'Obligatorio en cada llamada: elige la redacción, no se puede quitar',
  'The disclosure':'El aviso', 'Said first on every call. Pick the wording — it cannot be switched off.':'Se dice primero en cada llamada. Elige la redacción: no se puede desactivar.',
  'Disclosure wording':'Redacción del aviso', 'Every option says it is a virtual assistant and names':'Todas las opciones dicen que es un asistente virtual y nombran a',
  '. That part is not optional.':'. Esa parte no es opcional.',
  'Then, in its own words:':'Luego, con sus propias palabras:', 'Every call opens with the required disclosure:':'Cada llamada empieza con el aviso obligatorio:', 'Then its opener:':'Luego, su apertura:', 'Your opener, in the agent\'s own voice.':'Tu frase de apertura, en la voz del agente.',
  'Keep it to one sentence.':'Que sea una sola frase.', 'says it in':'la dice en',
  'Customer':'Cliente', 'Caller':'Quien llama',
  /* collections: balance mentions, offers, closing line, promise */
  'and otherwise asks when the customer intends to pay':'y si no, pregunta cuándo piensa pagar el cliente',
  'and asks when the customer intends to pay':'y pregunta cuándo piensa pagar el cliente',
  'Once a date is agreed, it':'Una vez acordada una fecha, el agente', '. Once a date is agreed, it':'. Una vez acordada una fecha, el agente',
  'If no date is agreed, it':'Si no se acuerda una fecha, el agente', '. If no date is agreed, it':'. Si no se acuerda una fecha, el agente',
  'ends the call':'termina la llamada', 'hands it to a person':'la pasa a una persona',
  'What it does when the customer gives no date at all.':'Qué hace cuando el cliente no da ninguna fecha.',
  'It hands over the same way as when someone asks for a person: it':'La pasa igual que cuando alguien pide una persona: el agente',
  'If no date is agreed':'Si no se acuerda una fecha',
  'And it ends every call with':'Y termina cada llamada con', 'It ends every call with':'Termina cada llamada con',
  'It also mentions:':'También menciona:', 'It also mentions':'También menciona',
  'how long the payment is overdue':'cuánto tiempo lleva de atraso el pago', 'the contract or account number':'el número de contrato o de cuenta',
  'how long it’s overdue':'cuánto tiempo lleva de atraso', 'the contract number':'el número de contrato',
  'days':'días', 'months':'meses', 'Overdue in':'Atraso en', 'List column':'Columna de la lista',
  'Each value comes from the campaign’s contact list, from the column named here. In this preview':'Cada valor viene de la lista de contactos de la campaña, de la columna indicada aquí. En esta vista previa',
  'and contract':'y el contrato', 'stand in for them.':'los reemplazan.',
  'What it can offer':'Qué puede ofrecer',
  'Tick what it may offer and put them in order. It offers one at a time and stops at the first yes.':'Marca lo que puede ofrecer y ordénalo. Ofrece una cosa a la vez y se detiene en el primer sí.',
  'full payment within N days':'pago total en un plazo de N días', 'a partial payment of at least N %':'un pago parcial de al menos N %',
  'the minimum payment':'el pago mínimo', 'in two parts: first today, the rest within N days':'en dos pagos: uno hoy y el resto en un plazo de N días',
  'a reduced balance without interest':'un saldo reducido sin intereses',
  'full payment within':'pago total en un plazo de', 'a partial payment of at least':'un pago parcial de al menos',
  'in two parts: first today, the rest within':'en dos pagos: uno hoy y el resto en un plazo de',
  'The agent works out':'El agente calcula el', '% of the amount on the list —':'% del monto de la lista:', 'here.':'aquí.',
  'The agent never calculates a discount; it reads the figure from the list —':'El agente nunca calcula un descuento; lee la cifra de la lista:',
  'If no offer is accepted (or none is ticked), it asks when the customer intends to pay and records the date.':'Si no se acepta ninguna oferta (o no hay ninguna marcada), pregunta cuándo piensa pagar el cliente y registra la fecha.',
  'Closing line':'Frase de cierre', 'Add a closing line':'Agregar una frase de cierre', 'no closing line — add one':'una frase de cierre opcional: agrégala',
  'Optional. Read word for word at the end of every call. Leave it empty for none.':'Opcional. Se lee palabra por palabra al final de cada llamada. Déjala vacía si no quieres ninguna.',
  'Any Banco Sol branch, quoting contract {contract}':'Cualquier sucursal de Banco Sol, indicando el contrato {contract}',
  'makes no payment offer':'no hace ofertas de pago', '· end':'· fin', 'Days for the rest':'Días para el resto',
  'How long the customer gets for the second part.':'Cuánto tiempo tiene el cliente para el segundo pago.',
  'Two rules are off while the brief offers a reduced balance without interest: that offer removes interest, so the agent cannot also promise never to.':'Hay dos reglas desactivadas mientras la descripción ofrece un saldo reducido sin intereses: esa oferta quita los intereses, así que el agente no puede prometer también que nunca lo hará.',
  'Off while a reduced balance without interest is on offer':'Desactivada mientras se ofrezca un saldo reducido sin intereses',
  'Off while the brief offers a reduced balance without interest':'Desactivada mientras la descripción ofrezca un saldo reducido sin intereses',
  'nothing else':'nada más', 'none':'ninguna', 'Offer':'Oferta', 'Promise':'Promesa', 'Promise ·':'Promesa ·',
  'Recorded promise':'Promesa registrada', 'What the agent recorded when it reached a date':'Lo que registró el agente al llegar a una fecha',
  'Amount':'Monto', 'Date':'Fecha', 'Promise recorded':'Promesa registrada', 'End of call · promise recorded':'Fin de la llamada · promesa registrada',
  'intent — the date the customer gave':'intención: la fecha que dio el cliente', 'intent':'intención',
  'No offers ticked':'Ninguna oferta marcada', 'No offer accepted':'Ninguna oferta aceptada',
  'fallback: asks when the customer intends to pay':'alternativa: pregunta cuándo piensa pagar el cliente',
  'Fallback: records the date the customer gave':'Alternativa: registra la fecha que dio el cliente',
  'Fallback: waiting for the date the customer gives':'Alternativa: espera la fecha que dé el cliente',
  'No date recorded':'No se registró una fecha', 'the call ends':'termina la llamada', 'the payment step does not apply':'no se aplica el paso de pago',
  /* receptionist brief */
  'It greets callers,':'Saluda a quien llama,', ', and when it can’t help it':'y cuando no puede ayudar,',
  'What it asks every caller, in this order.':'Qué le pregunta a cada persona, en este orden.', 'Fields it collects':'Datos que recoge',
  'Anything you add here is asked of every caller, and shows on the rules step with its wording.':'Lo que agregues aquí se le pregunta a cada persona y aparece en el paso de reglas con su redacción.',
  'What the call is for. A receptionist can do more than one.':'Para qué es la llamada. Una recepcionista puede hacer más de una cosa.',
  'What the call is for':'Para qué es la llamada', 'Pick as many as it should handle. It always keeps at least one —':'Elige todas las que deba atender. Siempre conserva al menos una:',
  'is the fallback.':'es la opción por defecto.', 'What it does when it cannot help, or the caller asks for a person.':'Qué hace cuando no puede ayudar o quien llama pide una persona.',
  'Every call it answers opens with':'Cada llamada que atiende empieza con', 'The greeting, in the agent’s own voice.':'El saludo, en la voz del agente.',
  'Set below, under What it knows':'Se configura abajo, en Qué sabe', 'What it knows':'Qué sabe',
  'Answers come only from here. Leave it empty and the agent takes a message instead of guessing.':'Las respuestas salen solo de aquí. Si lo dejas vacío, el agente toma un recado en vez de adivinar.',
  'About the company':'Sobre la empresa', 'Opening hours, what you do, how to find you…':'Horarios, qué hacen, cómo llegar…',
  'Website pages it learns from':'Páginas web de las que aprende', 'Files it learns from':'Archivos de los que aprende', 'Upload files':'Subir archivos', 'Empty':'Vacío', 'PDF, Word, text or spreadsheet files: price lists, FAQs, policies. In this prototype only the file name is kept.':'Archivos PDF, Word, texto u hojas de cálculo: listas de precios, preguntas frecuentes, políticas. En este prototipo solo se guarda el nombre del archivo.', 'Paste a page address and press Enter…':'Pega la dirección de una página y presiona Enter…',
  'Call it':'Nombre', 'It asks':'Pregunta', 'Order number':'Número de pedido', 'Do you have your order number handy?':'¿Tiene a mano su número de pedido?',
  'knows nothing about the business yet':'todavía no sabe nada de la empresa', 'collects nothing extra':'no recoge nada extra',
  'Name':'Nombre', 'Callback number':'Número para devolver la llamada', 'Reason for the call':'Motivo de la llamada', 'Email':'Correo', 'Company':'Empresa',
  /* step 4 — rules */
  'The rules it cannot break':'Las reglas que no puede romper', 'What it asks, and the rules it cannot break':'Qué pregunta y las reglas que no puede romper',
  'What it asks every caller':'Qué le pregunta a cada persona',
  'Toggle what it asks. Your own questions are asked after these, in the order you add them.':'Activa lo que pregunta. Tus preguntas se hacen después de estas, en el orden en que las agregues.',
  'Add a question of your own':'Agrega una pregunta propia', 'What you call it':'Cómo la llamas', 'What it asks out loud':'Qué pregunta en voz alta',
  'Fill both boxes to add it':'Completa ambos campos para agregarla', 'Add this question':'Agregar esta pregunta',
  'Asked of every caller, after the ones ticked above. You can switch it off or remove it later.':'Se le pregunta a cada persona, después de las marcadas arriba. Puedes desactivarla o quitarla después.',
  'Handover rules':'Reglas de derivación', 'Always on':'Siempre activa', 'Your own':'Tuyas', 'Other (specify)':'Otra (especificar)',
  'Describe it in your own words…':'Descríbela con tus palabras…', 'Add':'Agregar', 'Remove handover rule':'Quitar regla de derivación',
  'The customer asks for a person':'El cliente pide hablar con una persona',
  'The customer mentions a complaint, a lawyer or the regulator':'El cliente menciona un reclamo, un abogado o el regulador',
  'The customer asks about something outside this agent’s job':'El cliente pregunta por algo fuera de la tarea del agente',
  'The agent has asked the same question twice without an answer':'El agente hizo la misma pregunta dos veces sin respuesta',
  'The customer insists on something the agent may not promise':'El cliente insiste en algo que el agente no puede prometer',
  'The customer goes quiet for more than ten seconds':'El cliente se queda en silencio más de diez segundos',
  'asks for a person':'pide hablar con una persona', 'mentions a complaint or a lawyer':'menciona un reclamo o un abogado',
  'asks about something outside its job':'pregunta por algo fuera de su tarea', 'will not answer a question twice over':'no responde una pregunta dos veces',
  'insists on something it may not promise':'insiste en algo que no puede prometer', 'goes quiet':'se queda en silencio',
  'Words it must never use':'Palabras que nunca debe usar', 'Standard words':'Palabras estándar', 'Add a word…':'Agrega una palabra…',
  'Tick the ones that apply. If a word here would come up, the agent rephrases.':'Marca las que correspondan. Si una de estas palabras fuera a salir, el agente reformula.',
  'Other rules':'Otras reglas',
  'Tick the ones that apply. A never-promise rule makes the agent say it cannot promise that, then offer what it can do instead; the others change what it does on the call.':'Marca las que correspondan. Una regla de «nunca prometer» hace que el agente diga que no puede prometerlo y ofrezca lo que sí puede hacer; las demás cambian lo que hace en la llamada.',
  'A rule of your own':'Una regla propia', 'End the call if the customer is driving':'Terminar la llamada si el cliente está manejando',
  'Add this rule':'Agregar esta regla', 'Type the rule first':'Escribe la regla primero',
  'The message it leaves':'El mensaje que deja', 'Message for whoever answers':'Mensaje para quien atienda', 'What it says to whoever picked up':'Qué le dice a quien atendió',
  'End the call if someone other than the intended person answers':'Terminar la llamada si atiende alguien que no es la persona indicada',
  'If someone other than the intended person answers, never disclose the amount owed':'Si atiende alguien que no es la persona indicada, nunca revelar el monto adeudado',
  'If someone other than the intended person answers, leave this message':'Si atiende alguien que no es la persona indicada, dejar este mensaje',
  'Never promise a final price':'Nunca prometer un precio final', 'Never promise a discount':'Nunca prometer un descuento',
  'Never promise same-day delivery':'Nunca prometer entrega en el día', 'Never promise a specific doctor':'Nunca prometer un médico en particular',
  'Never promise a same-day slot':'Nunca prometer un turno en el día', 'Never give clinical advice':'Nunca dar consejo clínico',
  'Never promise an exact callback minute':'Nunca prometer el minuto exacto de la devolución', 'Never promise a resolution':'Nunca prometer una solución',
  'Never promise to remove interest':'Nunca prometer quitar intereses', 'Never promise to stop legal action':'Nunca prometer detener acciones legales',
  'Never promise a discount on the balance':'Nunca prometer un descuento sobre el saldo',
  'Never promise a person will call back at an exact time':'Nunca prometer que una persona devolverá la llamada a una hora exacta',
  'Never quote a price':'Nunca dar un precio', 'Never confirm an appointment the calendar hasn’t accepted':'Nunca confirmar una cita que el calendario no aceptó',
  'Save & open the agent':'Guardar y abrir el agente',
  /* step 5 — test */
  'Try it before anyone else does':'Pruébalo antes que nadie',
  'You play the customer. Type anything, or tap a line below. Nothing here reaches a real phone.':'Tú haces de cliente. Escribe lo que quieras o toca una frase abajo. Nada de esto llega a un teléfono real.',
  'You play the customer who just called in. Type anything, or tap a line below. Nothing here reaches a real phone.':'Tú haces de cliente que acaba de llamar. Escribe lo que quieras o toca una frase abajo. Nada de esto llega a un teléfono real.',
  'Script':'Guion', 'Live · Claude':'En vivo · Claude',
  'Live mode is not available in this build — replies follow a script that reads the same settings':'El modo en vivo no está disponible en esta versión: las respuestas siguen un guion que lee la misma configuración',
  'Replies come from Claude (quick tier), from a prompt built out of this agent’s settings':'Las respuestas vienen de Claude (nivel rápido), con un prompt armado a partir de la configuración de este agente',
  'Say something as the customer…':'Di algo como cliente…', 'Send':'Enviar',
  'Test conversations spend credits like any other interaction — the test agent itself costs nothing extra. Tests are not written to the call log and don’t affect metrics.':'Las conversaciones de prueba consumen créditos como cualquier interacción; el agente de prueba no cuesta nada extra. Las pruebas no quedan en el registro de llamadas y no afectan las métricas.',
  'Live replies use your account’s Claude credits.':'Las respuestas en vivo usan los créditos de Claude de tu cuenta.',
  'Hear it for real':'Escúchalo de verdad', 'Call':'Llamar', 'Back to the agent':'Volver al agente', 'Back to the rules':'Volver a las reglas',
  'Calling you now':'Te estamos llamando', 'Connecting you':'Conectando', 'Ringing':'Sonando', 'Dialling':'Marcando', 'Cancel':'Cancelar',
  'Call again':'Llamar de nuevo', 'Done':'Listo', 'Call me now':'Llámame ahora', 'Simulate the call':'Simular la llamada',
  'Here is what was said. Tap any line later on the correction screen to fix it.':'Esto es lo que se dijo. Después puedes tocar cualquier frase en la pantalla de corrección para arreglarla.',
  'One call, to you only. It does not touch your contact list.':'Una sola llamada, solo a ti. No toca tu lista de contactos.',
  'This is the number the agent will answer while it is being tested. Only you can reach it.':'Este es el número que atenderá el agente mientras se prueba. Solo tú puedes llamarlo.',
  'Test line':'Línea de prueba', 'Your phone number':'Tu número de teléfono', 'You':'Tú', 'Call finished · 0:41':'Llamada terminada · 0:41',
  /* agent page */
  'All agents':'Todos los agentes', 'History':'Historial', 'Edit':'Editar', 'How it is set up':'Cómo está configurado',
  'Asks for a person →':'Pide una persona →', 'Latest':'Última', 'unsaved changes':'cambios sin guardar', 'deployed':'desplegada', 'draft':'borrador',
  'No versions yet':'Todavía no hay versiones', 'Last deployed':'Último despliegue', 'Last deployed: never':'Último despliegue: nunca', 'by':'por',
  'Spent':'Consumió', 'credits over':'créditos en', 'interactions':'interacciones', 'No credits spent yet':'Todavía no consumió créditos',
  'Live in':'En vivo en', 'No dialer is running it now':'Ningún discador lo usa ahora', 'Not in a dialer yet':'Todavía no está en un discador',
  'Save':'Guardar', 'Saved':'Guardado', 'Deploy':'Desplegar', 'Delete agent':'Eliminar agente',
  'This version is live':'Esta versión está en vivo', 'Not deployed yet':'Todavía no desplegada',
  'is the latest version and it is already deployed. Edit the agent to start a new draft.':'es la última versión y ya está desplegada. Edita el agente para empezar un nuevo borrador.',
  'This agent is not in a dialer yet, so there is nothing to deploy to. Add it to a dialer in the Outbound Hub, then deploy from here.':'Este agente todavía no está en un discador, así que no hay dónde desplegarlo. Agrégalo a un discador en el Outbound Hub y despliégalo desde aquí.',
  'It was last deployed on':'Se desplegó por última vez el',
  ', but no dialer is running it now, so there is nothing to deploy to. Put it back in a dialer in the Outbound Hub to deploy it again.':', pero ningún discador lo usa ahora, así que no hay dónde desplegarlo. Vuelve a ponerlo en un discador en el Outbound Hub para desplegarlo otra vez.',
  'Assign this agent to a dialer in the Outbound Hub to deploy it':'Asigna este agente a un discador en el Outbound Hub para desplegarlo',
  'No dialer is running it now — put it back in one to deploy again':'Ningún discador lo usa ahora: vuelve a ponerlo en uno para desplegarlo otra vez',
  'No dialer is running it now — assign it in the Outbound Hub to deploy again':'Ningún discador lo usa ahora: asígnalo en el Outbound Hub para desplegarlo otra vez',
  'Not in a dialer yet — assign it in the Outbound Hub first':'Todavía no está en un discador: asígnalo primero en el Outbound Hub',
  'Save the change and publish it, in one step':'Guardar el cambio y publicarlo en un solo paso',
  'is already deployed — nothing new to publish':'ya está desplegada: no hay nada nuevo para publicar',
  'recovered':'recuperada',
  '— what you see above is that version\'s configuration, not live yet. Save it to keep it as the working draft, or Deploy to save and publish it in one step.':'— lo que ves arriba es la configuración de esa versión, todavía no está en vivo. Guárdala para dejarla como borrador de trabajo, o despliégala para guardarla y publicarla en un solo paso.',
  /* summary prose */
  'answers calls to':'atiende las llamadas de', 'Every call opens with the fixed disclosure, then':'Cada llamada empieza con el aviso fijo, luego',
  'when the customer':'cuando el cliente', 'It never promises':'Nunca promete', 'never says':'nunca dice', 'Other':'Otras', 'rule':'regla', 'rules':'reglas',
  'it follows:':'que sigue:', 'It also hands over on your own':'También deriva según tus', 'Corrections you have applied:':'Correcciones que aplicaste:',
  'a final price':'un precio final', 'a discount':'un descuento', 'same-day delivery':'entrega en el día', 'a specific doctor':'un médico en particular',
  'a same-day slot':'un turno en el día', 'an exact callback minute':'el minuto exacto de la devolución', 'a resolution':'una solución',
  'to remove interest':'quitar intereses', 'to stop legal action':'detener acciones legales', 'a discount on the balance':'un descuento sobre el saldo',
  'a person will call back at an exact time':'que una persona devolverá la llamada a una hora exacta',
  /* modals on the agent page */
  'Deploy this agent?':'¿Desplegar este agente?', 'This agent is assigned to':'Este agente está asignado a',
  'Changes apply to the next interaction.':'Los cambios se aplican desde la próxima interacción.', 'It replaces':'Reemplaza a', ', the version the':', la versión que',
  'dialer is':'el discador está', 'dialers are':'los discadores están', 'using now.':'usando ahora.',
  'An agent runs one live version everywhere it is assigned, so all':'Un agente corre una sola versión en vivo en todos los lugares donde está asignado, así que los',
  'dialers switch together. To move one of them separately it needs its own agent.':'discadores cambian juntos. Para mover uno por separado hace falta un agente propio.',
  'The configuration you recovered from':'La configuración que recuperaste de', 'is saved as':'se guarda como', 'and published in the same step.':'y se publica en el mismo paso.',
  'Version history':'Historial de versiones', 'Close':'Cerrar', 'Was live':'Estuvo en vivo', 'Recover this version':'Recuperar esta versión',
  '· deployed and live now':'· desplegada y en vivo ahora', '· never deployed':'· nunca desplegada',
  'Nothing to compare':'Nada para comparar', 'is the newest version there is.':'es la versión más nueva que existe.', 'Nothing would change':'No cambiaría nada',
  'is identical to':'es idéntica a', ', the version running now':', la versión en uso ahora', 'Deploying':'Desplegar', 'changes':'cambia',
  'one thing':'una cosa', 'Gains':'Agrega', 'Loses':'Quita', 'Changes':'Cambia',
  'Company it says':'Empresa que nombra', 'How it opens':'Cómo empieza', 'What it is for':'Para qué es', 'Asks for a person':'Pide una persona',
  'Opening line':'Frase de apertura', 'Disclosure':'Aviso', 'What it says about the balance':'Qué dice sobre el saldo', 'How payment is arranged':'Cómo se acuerda el pago',
  'Handover rule':'Regla de derivación', 'Never promises':'Nunca promete', 'Other rule':'Otra regla', 'Banned word':'Palabra prohibida', 'Correction':'Corrección',
  'Asks every caller':'Pregunta a cada persona',
  'Keep it':'Conservarlo', 'Its brief, its rules and its interaction history go with it. This cannot be undone.':'Se eliminan su descripción, sus reglas y su historial de interacciones. Esto no se puede deshacer.',
  'It is live in':'Está en vivo en', '— deleting it stops those calls.':'— eliminarlo detiene esas llamadas.',
  'This agent is deployed':'Este agente está desplegado', 'is deployed and live in':'está desplegado y en vivo en',
  '. Saving overwrites the previous version':'. Guardar sobrescribe la versión anterior', 'Any interactions in progress will be affected.':'Las interacciones en curso se verán afectadas.',
  'Keep editing':'Seguir editando', 'Save anyway':'Guardar de todos modos',
  /* version notes */
  'First version':'Primera versión', 'Edited the agent':'Agente editado', 'Reworded the opener':'Cambió la frase de apertura',
  'Added the medical-emergency handover rule':'Agregó la regla de derivación por urgencia médica', 'Never-promise: final price':'Nunca prometer: precio final',
  'Let it book appointments as well as take messages':'Ahora también agenda citas, además de tomar recados',
  'Say only that a balance is outstanding, never the amount':'Decir solo que hay un saldo pendiente, nunca el monto',
  'Added abogado to the words it must never use':'Agregó «abogado» a las palabras que nunca debe usar',
  'Gave customers five days instead of three':'Dio a los clientes cinco días en lugar de tres',
  /* calls + correction */
  'Which call should it learn from?':'¿De qué llamada debería aprender?',
  'Tap a call to read what was said and fix it. Every correction becomes a setting you approve first.':'Toca una llamada para leer qué se dijo y corregirlo. Cada corrección se convierte en un ajuste que apruebas primero.',
  'No calls yet':'Todavía no hay llamadas', 'All':'Todas', 'Worth a look':'Vale la pena revisar', 'Nothing needs a look right now.':'Nada necesita revisión ahora.',
  '“Worth a look” marks calls that ended without reaching the goal. No answers cannot be corrected — nothing was said.':'«Vale la pena revisar» marca las llamadas que terminaron sin cumplir el objetivo. Las llamadas sin respuesta no se pueden corregir: no se dijo nada.',
  'Nobody answered — nothing was said':'Nadie atendió: no se dijo nada',
  'has not made any calls yet. Deploy it into a dialer and its calls show up here.':'todavía no hizo llamadas. Despliégalo en un discador y sus llamadas aparecerán aquí.',
  'Confirmed':'Confirmada', 'Rescheduled':'Reprogramada', 'Took a message':'Tomó un recado', 'Transferred':'Transferida', 'No answer':'Sin respuesta',
  'All calls':'Todas las llamadas', 'Teach it what to say':'Enséñale qué decir', 'Tap anything':'Toca cualquier cosa que',
  'said that was wrong, then write what it should have said instead. We turn it into a setting — you approve the change before it takes effect.':'dijo mal y escribe qué debería haber dicho. Lo convertimos en un ajuste: apruebas el cambio antes de que se aplique.',
  'Selected — tell us what it should have said →':'Seleccionada: cuéntanos qué debería haber dicho →', 'Tap to correct':'Toca para corregir',
  'Corrections become plain-language settings. There is no script or prompt text to edit here — there never is.':'Las correcciones se convierten en ajustes en lenguaje claro. Aquí no hay guion ni prompt para editar, y nunca lo habrá.',
  'Pick a line':'Elige una frase', 'Tap any line':'Toca cualquier frase que', 'said. Most supervisors start where the customer got stuck — here, right after “':'dijo. La mayoría de los supervisores empieza donde el cliente se trabó: aquí, justo después de “',
  'What should it have said?':'¿Qué debería haber dicho?', 'In your own words. One sentence is enough.':'Con tus palabras. Una frase alcanza.',
  'It should have offered another time before taking a message…':'Debería haber ofrecido otro horario antes de tomar un recado…',
  'See the change':'Ver el cambio', 'Proposed change':'Cambio propuesto', 'Add rule:':'Agregar regla:', 'Change the goal':'Cambiar el objetivo',
  'Applies to future calls only.':'Se aplica solo a llamadas futuras.', 'It reaches live calls on the next deploy.':'Llega a las llamadas en vivo con el próximo despliegue.',
  'Discard':'Descartar', 'Apply change':'Aplicar cambio', 'Teach it':'Enséñale',
  /* interactions */
  'AI agents':'Agentes de IA', 'People':'Personas', 'Search interaction':'Buscar interacción',
  'AI agents and people, side by side. The star marks the AI ones — open any row to read it.':'Agentes de IA y personas, lado a lado. La estrella marca las de IA: abre cualquier fila para leerla.',
  'Start time':'Inicio', 'End time':'Fin', 'Channel':'Canal', 'Client':'Cliente', 'Source':'Origen', 'Handled by':'Atendida por',
  'Disposition':'Tipificación', 'Credits':'Créditos', 'Duration':'Duración', 'Items per page: 50':'Elementos por página: 50', 'Items 1–':'Elementos 1–',
  'Handed over':'Derivada', 'Payment agreed':'Pago acordado', 'Solved':'Resuelta', 'Unsolved':'Sin resolver', 'Answering Machine':'Contestador',
  'Reported by the agent for this interaction':'Informado por el agente para esta interacción', 'Handled by a person — no credits':'Atendida por una persona: sin créditos',
  'Summary':'Resumen', 'Transcription':'Transcripción', 'Chat':'Chat', 'Data':'Datos', 'Comments':'Comentarios', 'Quality':'Calidad',
  'Back to interactions':'Volver a interacciones', 'Credits this interaction reported, from the webhook':'Créditos que informó esta interacción, desde el webhook',
  'credits':'créditos', '· AI agent':'· agente de IA', 'Download recording':'Descargar grabación', 'Timeline':'Línea de tiempo',
  'Hide timeline':'Ocultar línea de tiempo', 'Show timeline':'Mostrar línea de tiempo', 'Started':'Inicio', 'Hold time':'Tiempo en espera',
  'Attended by AI agent':'Atendida por agente de IA', 'Attended by user':'Atendida por usuario', 'Handed over to user':'Derivada a usuario',
  'Attended by automation':'Atendida por automatización', 'Finished':'Finalizada',
  'Conversation summary':'Resumen de la conversación', 'A quick overview of the conversation.':'Un vistazo rápido a la conversación.',
  'Sentiment':'Sentimiento', 'Main reason of the conversation':'Motivo principal de la conversación', 'Key points discussed':'Puntos clave', 'Resolution':'Resolución',
  'Positive':'Positivo', 'Neutral':'Neutral', 'Negative':'Negativo',
  'No summary for this interaction':'No hay resumen para esta interacción',
  'Summaries are written by the AI agent that held the conversation. This one was handled by a person.':'Los resúmenes los escribe el agente de IA que tuvo la conversación. Esta la atendió una persona.',
  'No transcription for this call':'No hay transcripción para esta llamada',
  'Calls handled by people are recorded, not transcribed. Interactions an AI agent held come with a full transcript.':'Las llamadas que atienden personas se graban, no se transcriben. Las que atiende un agente de IA vienen con la transcripción completa.',
  'Nobody has commented on this interaction.':'Nadie comentó esta interacción.', 'Add a comment…':'Agrega un comentario…',
  'No evaluations yet':'Todavía no hay evaluaciones', 'Results appear here once you complete one.':'Los resultados aparecen aquí cuando completes una.',
  'Evaluate':'Evaluar', 'Evaluation':'Evaluación', 'Evaluee — campaign':'Evaluado — campaña', 'Model':'Modelo', 'No data available':'No hay datos disponibles',
  'Web chat':'Chat web', 'WhatsApp':'WhatsApp', 'SMS':'SMS', 'inbound':'entrante', 'outbound':'saliente',
  'Today':'Hoy', 'Yesterday':'Ayer',
  /* toasts */
  'Saved as a working draft. Deploy it when you are ready.':'Guardado como borrador de trabajo. Despliégalo cuando estés listo.',
  'Saved as the working draft.':'Guardado como borrador de trabajo.', 'Sent. Your account team will pick it up with you.':'Enviado. Tu equipo de cuenta lo retomará contigo.',
  'Deployed.':'Desplegado.', 'This is now the live version.':'Esta es ahora la versión en vivo.',
  /* simulator captions */
  'Closing':'Cierre', 'Goal setting':'Objetivo', 'Goal reached':'Objetivo cumplido', 'call ends':'termina la llamada',
  'Rule: always disclose':'Regla: siempre se identifica', 'handoff setting':'ajuste de derivación',
  'Ends the call':'Termina la llamada', 'the disposition is set outside the agent':'la tipificación se define fuera del agente',
  'Rule: offer a partial payment before escalating':'Regla: ofrecer un pago parcial antes de escalar',
  'Rule: offer another slot before taking a message':'Regla: ofrecer otro horario antes de tomar un recado',
  'Rule: ends the call — the wrong person answered':'Regla: termina la llamada, atendió otra persona',
  'Rule: leaves the message you set, then ends the call':'Regla: deja el mensaje que configuraste y termina la llamada',
  'the amount is never disclosed':'el monto nunca se revela', 'Handover rule: a complaint or a lawyer is mentioned':'Regla de derivación: se menciona un reclamo o un abogado',
  'Nothing stops it answering that':'Nada le impide responder eso', 'goal setting':'objetivo',
  'Fixed disclosure + your opener':'Aviso fijo + tu apertura', 'Fixed disclosure + your opener + the identity check':'Aviso fijo + tu apertura + la verificación de identidad',
  'Answered from the business profile':'Respondió con el perfil de la empresa', 'Goal: collects the caller’s details':'Objetivo: registra los datos de quien llama',
  'Goal: books from the connected calendar':'Objetivo: agenda en el calendario conectado', 'Goal setting → takes a message instead':'Objetivo → toma un recado en su lugar',
  'Nothing in the business profile yet → takes a message':'Todavía no hay nada en el perfil de la empresa → toma un recado',
  'Live':'En vivo', 'Claude':'Claude', 'Live reply failed → script':'Falló la respuesta en vivo → guion',
  /* no drafts: saving replaces the current version; Live = in a dialer */
  'Updating…':'Actualizando…', 'Not saved yet':'Sin guardar todavía',
  'An agent runs inside a dialer. It is live only while it is in one, and the agent page says which dialers are running it. Dialers are assigned in the Outbound Hub, not here.':'Un agente corre dentro de un discador. Solo está en vivo mientras está en uno, y la página del agente dice qué discadores lo usan. Los discadores se asignan en el Outbound Hub, no aquí.',
  'Live':'En vivo', 'Current':'Actual', 'The current version':'La versión actual', 'live':'en vivo', 'not live':'no en vivo',
  'Not in a dialer':'No está en un discador', 'The current version · not in a dialer':'La versión actual · no está en un discador',
  'This agent is not in a dialer, so it is not live. Add it to a dialer in the Outbound Hub to put it live — it will run':'Este agente no está en un discador, así que no está en vivo. Agrégalo a un discador en el Outbound Hub para ponerlo en vivo; usará',
  'its current version':'su versión actual', ' · current, not live':' · actual, no en vivo',
  'is the current version.':'es la versión actual.', ', the current version.':', la versión actual.', 'Recovering':'Recuperar',
  'This agent is live':'Este agente está en vivo', 'is live in':'está en vivo en',
  '. Saving replaces the version it is running':'. Guardar reemplaza la versión que está usando', ', in every one of them at once.':', en todos a la vez.',
  'Save and replace':'Guardar y reemplazar',
  'has not made any calls yet. Assign it to a dialer in the Outbound Hub and its calls show up here.':'todavía no hizo llamadas. Asígnalo a un discador en el Outbound Hub y sus llamadas aparecerán aquí.',
  'It reaches live calls as soon as it is applied.':'Llega a las llamadas en vivo en cuanto se aplica.',
  'Saved as v1. Add it to a dialer in the Outbound Hub to put it live.':'Guardado como v1. Agrégalo a un discador en el Outbound Hub para ponerlo en vivo.',
};

/* strings that carry a name, a number or a version */
const MONTHS_ES = {Jan:'ene',Feb:'feb',Mar:'mar',Apr:'abr',May:'may',Jun:'jun',Jul:'jul',Aug:'ago',Sep:'sep',Oct:'oct',Nov:'nov',Dec:'dic'};
const plural = (n, one, many) => n + ' ' + (n === '1' ? one : many);
/* an offer label, with its number and optional list column */
const OFFER_ES = [
  [/^full payment within (\d+) days/, m => 'pago total en un plazo de ' + m[1] + ' días'],
  [/^a partial payment of at least (\d+)%/, m => 'un pago parcial de al menos ' + m[1] + '%'],
  [/^the minimum payment/, () => 'el pago mínimo'],
  [/^in two parts: first today, the rest within (\d+) days/, m => 'en dos pagos: uno hoy y el resto en un plazo de ' + m[1] + ' días'],
  [/^a reduced balance without interest/, () => 'un saldo reducido sin intereses'],
];
const trOffer = s => { for (const [rx, fn] of OFFER_ES) { const m = s.match(rx); if (m) return fn(m) + s.slice(m[0].length); } return null; };
/* "a, b or c" where the items are offers (one of them carries its own comma) */
const trOffers = s => { let rest = s, out = [];
  while (rest) { const t = trOffer(rest); if (t === null) return null;
    const m = OFFER_ES.map(([rx]) => rest.match(rx)).find(Boolean); out.push(t.slice(0, t.length - (rest.length - m[0].length)));
    rest = rest.slice(m[0].length); const j = rest.match(/^(, | or )/); if (j) { out.push(j[0] === ' or ' ? ' o ' : ', '); rest = rest.slice(j[0].length); } else if (rest) return null; }
  return out.join(''); };
const ES_RX = [
  [/^(offers (.+)|makes no payment offer), (and (?:otherwise )?asks when the customer intends to pay)$/, m => (m[2] ? 'ofrece ' + (trOffers(m[2]) || m[2]) : 'no hace ofertas de pago') + ', ' + tr(m[3])],
  [/^offers (.+)$/, m => { const t = trOffers(m[1]); return t === null ? null : 'ofrece ' + t; }],
  [/^(states the amount owed|says only that there is an outstanding balance) and (.+)$/, m => tr(m[1]) + ' y ' + m[2].split(' and ').map(x => tr(x)).join(' y ')],
  [/^Move (.+) (up|down)$/, m => (m[2] === 'up' ? 'Subir ' : 'Bajar ') + tr(m[1])],
  [/^List column for (.+)$/, m => 'Columna de la lista para ' + ({overdue:'el atraso', contract:'el contrato', minimum:'el pago mínimo', reduced:'el saldo reducido'}[m[1]] || m[1])],
  [/^(\d+) · (.+)$/, m => { const t = trOffer(m[2]); return t === null ? null : m[1] + ' · ' + t; }],
  [/^Offer (\d+) of (\d+): (.+)$/, m => 'Oferta ' + m[1] + ' de ' + m[2] + ': ' + (trOffer(m[3]) || m[3])],
  [/^Offer accepted: (.+?) · payment setting: (.+)$/, m => 'Oferta aceptada: ' + (trOffer(m[1]) || m[1]) + ' · ajuste de pago: ' + tr(m[2])],
  [/^Offer: (.+)$/, m => 'Oferta: ' + (trOffer(m[1]) || m[1])],
  [/^payment setting: (.+)$/, m => 'ajuste de pago: ' + tr(m[1])],
  [/^(Fallback: records the date the customer gave) · payment setting: (.+)$/, m => tr(m[1]) + ' · ajuste de pago: ' + tr(m[2])],
  [/^Goal reached · payment setting: (.+)$/, m => 'Objetivo cumplido · ajuste de pago: ' + tr(m[1])],
  [/^how long it’s overdue, in (days|months) \((.+?)\)( and the contract number \((.+)\))?$/, m => 'cuánto tiempo lleva de atraso, en ' + (m[1] === 'days' ? 'días' : 'meses') + ' (' + m[2] + ')' + (m[3] ? ' y el número de contrato (' + m[4] + ')' : '')],
  [/^the contract number \((.+)\)$/, m => 'el número de contrato (' + m[1] + ')'],
  [/^Promise recorded: (.+) · (.+) · (.+)$/, m => 'Promesa registrada: ' + (m[1] === 'intent' ? 'intención' : (trOffer(m[1]) || m[1])) + ' · ' + m[2] + ' · ' + m[3]],
  [/^(full payment within|a partial payment of at least|the minimum payment|in two parts|a reduced balance without interest)/, m => trOffer(m.input)],
  [/^Edit — ([\s\S]+)$/, m => 'Editar — ' + tr(m[1])],
  [/^Step (\d) · (.+)$/, m => 'Paso ' + m[1] + ' · ' + tr(m[2])],
  [/^Built from the (.+) template$/, m => 'Creado con la plantilla ' + tr(m[1])],
  [/^Filled in from the (.+) template\. Open a section to change what is in it\.$/, m =>
     'Completado con la plantilla ' + tr(TEMPLATES.map(t => t.name).find(n => n.toLowerCase() === m[1]) || m[1]).toLowerCase() + '. Abre una sección para cambiar lo que tiene.'],
  [/^(.+) · (\d+) rules?$/, m => tr(m[1]) + ' · ' + plural(m[2], 'regla', 'reglas')],
  [/^(\d+) rules?$/, m => plural(m[1], 'regla', 'reglas')],
  [/^(\d+) words?$/, m => plural(m[1], 'palabra', 'palabras')],
  [/^(\d+) questions?$/, m => plural(m[1], 'pregunta', 'preguntas')],
  [/^(\d+) sources?$/, m => plural(m[1], 'fuente', 'fuentes')],
  [/^(\d+) things$/, m => m[1] + ' cosas'],
  [/^(\d+) days$/, m => m[1] + ' días'],
  [/^Used by (\d+) teams$/, m => 'Lo usan ' + m[1] + ' equipos'],
  [/^(\d+) voices ·$/, m => m[1] + ' voces ·'],
  [/^Deployed · one live version, running in (.+)$/, m => 'Desplegado · una versión en vivo, corriendo en ' + trList(m[1], true)],
  [/^in (\d+) dialers$/, m => 'en ' + m[1] + ' discadores'],
  [/^Open (.+)$/, m => 'Abrir ' + m[1]],
  [/^Delete (.+)\?$/, m => '¿Eliminar ' + m[1] + '?'],
  [/^Remove (.+)$/, m => 'Quitar ' + tr(m[1])],
  [/^Copy (.+)$/, m => 'Copiar ' + tr(m[1])],
  [/^(v\d+) · read-only$/, m => m[1] + ' · solo lectura'],
  [/^How (v\d+) was set up, in full$/, m => 'Cómo estaba configurada ' + m[1] + ', completa'],
  [/^Publish (.+) as the live version$/, m => 'Publicar ' + m[1] + ' como versión en vivo'],
  [/^(v\d+) is already deployed — nothing new to publish$/, m => m[1] + ' ya está desplegada: no hay nada nuevo para publicar'],
  [/^against (v\d+)(, the version running now)?$/, m => 'contra ' + m[1] + (m[2] ? ', la versión en uso ahora' : '')],
  [/^· was live, replaced by (v\d+)$/, m => '· estuvo en vivo, reemplazada por ' + m[1]],
  [/^Was live(?: from (.+))?, until (v\d+) replaced it$/, m => 'Estuvo en vivo' + (m[1] ? ' desde ' + tr(m[1]) : '') + ', hasta que la reemplazó ' + m[2]],
  [/^Deployed (.+)$/, m => 'Desplegada ' + tr(m[1])],
  [/^Recovered (v\d+)$/, m => 'Recuperada de ' + m[1]],
  [/^agrees a payment date within (\d+) days$/, m => 'acuerda una fecha de pago en un plazo de ' + m[1] + ' días'],
  [/^agrees a partial payment of at least (\d+)%$/, m => 'acuerda un pago parcial de al menos ' + m[1] + '%'],
  [/^tells the customer where to pay: ([\s\S]*)$/, m => 'le dice al cliente dónde pagar: ' + m[1]],
  [/^transfers to the (.+) campaign$/, m => 'transfiere a la campaña ' + m[1]],
  [/^When any of these happens the agent stops, says a person will take over, and hands the call across\. It hands over by: (.+) — change that on the brief\.$/, m =>
     'Cuando pasa cualquiera de estas cosas, el agente se detiene, dice que una persona continuará y pasa la llamada. Deriva así: ' + tr(m[1]) + '. Cámbialo en la descripción.'],
  [/^collects ([\s\S]+)$/, m => 'recoge ' + m[1]
     .replace(/, plus (\d+) custom questions?/, (x, n) => ', más ' + n + (n === '1' ? ' pregunta propia' : ' preguntas propias'))
     .replace(/a name/, 'un nombre').replace(/a callback number/, 'un número para devolver la llamada')
     .replace(/the reason for the call/, 'el motivo de la llamada').replace(/an email/, 'un correo')
     .replace(/the company/, 'la empresa').replace(/ and /g, ' y ')],
  [/^answers from ([\s\S]+)$/, m => 'responde con ' + m[1].replace('the business profile', 'el perfil de la empresa')
     .replace(/(\d+) trained pages?/, (x, n) => n + (n === '1' ? ' página entrenada' : ' páginas entrenadas'))
     .replace(/(\d+) uploaded files?/, (x, n) => n + (n === '1' ? ' archivo subido' : ' archivos subidos')).replace(' and ', ' y ')],
  [/^takes a message and books appointments$/, () => 'toma un recado y agenda citas'],
  [/^Answer and talk to (.+) as if you were a customer\.$/, m => 'Atiende y habla con ' + m[1] + ' como si fueras un cliente.'],
  [/^You are calling in — talk to (.+) as a customer would\.$/, m => 'Estás llamando: habla con ' + m[1] + ' como lo haría un cliente.'],
  [/^Saved as (v\d+)\. Deploy it when you are ready\.$/, m => 'Guardado como ' + m[1] + '. Despliégalo cuando estés listo.'],
  [/^Saved as (v\d+) and deployed\. ([\s\S]*)$/, m => 'Guardado como ' + m[1] + ' y desplegado. ' + tr(m[2])],
  [/^Deployed\. ([\s\S]+)$/, m => 'Desplegado. ' + tr(m[1])],
  [/^(.+) picks? it up on the next interaction\.$/, m => trList(m[1], true) + (/ and /.test(m[1]) ? ' lo toman' : ' lo toma') + ' en la próxima interacción.'],
  [/^(v\d+) loaded\. Read it here, then Deploy it when you are ready\.$/, m => m[1] + ' cargada. Revísala aquí y despliégala cuando estés listo.'],
  [/^Settings updated\. (.+) uses this from the next interaction\.$/, m => 'Ajustes actualizados. ' + m[1] + ' lo usa desde la próxima interacción.'],
  [/^(.+) deleted\.$/, m => m[1] + ' eliminado.'],
  [/^Rule: (.+)$/, m => 'Regla: ' + tr(m[1])],
  [/^If someone other than the intended person answers, leave this message: ([\s\S]+)$/, m => 'Si atiende alguien que no es la persona indicada, dejar este mensaje: ' + m[1]],
  [/^Payment setting: (.+)$/, m => 'Ajuste de pago: ' + tr(m[1])],
  [/^Your own handover rule: “(.+)”$/, m => 'Tu regla de derivación: “' + m[1] + '”'],
  [/^“(.+)” is on its never-use list → rephrase and hand off$/, m => '“' + m[1] + '” está en su lista de palabras prohibidas → reformula y deriva'],
  [/^(\d+) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})(, [\d:]+)?$/, m => m[1] + ' ' + MONTHS_ES[m[2]] + ' ' + m[3] + (m[4] || '')],
  [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d+), (\d{4}),$/, m => m[2] + ' ' + MONTHS_ES[m[1]] + ' ' + m[3] + ','],
  [/^(\d+) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) · ([\d:]+)$/, m => m[1] + ' ' + MONTHS_ES[m[2]] + ' · ' + m[3]],
  [/^(Today|Yesterday) · ([\d:]+)$/, m => (m[1] === 'Today' ? 'Hoy' : 'Ayer') + ' · ' + m[2]],
  [/^Remaining credits, from the n2p usage API · renews (.+)$/, m => 'Créditos disponibles, según la API de uso de n2p · se renueva el ' + tr(m[1])],
  [/^(Call|Web chat|WhatsApp|Email|SMS) · (inbound|outbound)$/, m => ({'Call':'Llamada','Web chat':'Chat web','WhatsApp':'WhatsApp','Email':'Correo','SMS':'SMS'})[m[1]] + ' · ' + (m[2] === 'inbound' ? 'entrante' : 'saliente')],
  [/^AI agent · (.+)$/, m => 'Agente de IA · ' + tr(m[1])],
  [/^calls (.+)$/, m => 'llama a ' + tr(m[1])],
  [/^Subject: (.+)$/, m => 'Asunto: ' + m[1]],
  [/^Live · running in (.+)$/, m => 'En vivo · corriendo en ' + trList(m[1], true)],
  [/^· current, live in (.+)$/, m => '· actual, en vivo en ' + trList(m[1], true)],
  [/^· replaced by (v\d+)$/, m => '· reemplazada por ' + m[1]],
  [/^against (v\d+), the current version$/, m => 'contra ' + m[1] + ', la versión actual'],
  [/^Saved as (v\d+)\. It replaces (v\d+|the previous version) in (.+) from the next interaction\.$/, m => 'Guardado como ' + m[1] + '. Reemplaza a ' + (m[2] === 'the previous version' ? 'la versión anterior' : m[2]) + ' en ' + trList(m[3], true) + ' desde la próxima interacción.'],
  [/^Saved as (v\d+)\. It is now the current version\.$/, m => 'Guardado como ' + m[1] + '. Ahora es la versión actual.'],
  [/^(v\d+) loaded\. Review it, then save to make it the current version\.$/, m => m[1] + ' cargada. Revísala y guárdala para que sea la versión actual.'],
];

/* "a, b or c" / "a · b" / "a → b": translate piece by piece when every piece is known */
function trList(s, names) {
  const parts = s.split(/(, | or | and | · | → )/);
  if (parts.length < 3) return names ? s : undefined;
  /* a list of single words (banned words, dialer names) keeps its words; only the joins change */
  if (parts.every((p, i) => i % 2 || /^[\w\u00c0-\u017f.-]+$/.test(p)) && parts.some((p, i) => i % 2 && (p === ' or ' || p === ' and ')))
    return parts.map((p, i) => i % 2 ? (p === ' or ' ? ' o ' : p === ' and ' ? ' y ' : p) : (trExact(p) !== undefined ? trExact(p) : p)).join('');
  let hit = false;
  const out = parts.map((p, i) => {
    if (i % 2) return p === ' or ' ? ' o ' : p === ' and ' ? ' y ' : p;
    const t = trExact(p);
    if (t !== undefined) { hit = true; return t; }
    return names ? p : null;
  });
  return (names || (hit && out.indexOf(null) < 0)) ? out.join('') : undefined;
}
function trExact(core) {
  if (Object.prototype.hasOwnProperty.call(ES, core)) return ES[core];
  for (const [rx, fn] of ES_RX) { const m = core.match(rx); if (m) { const r = fn(m); if (r != null) return r; } }
  return undefined;
}
function tr(s) {
  if (UI_LANG !== 'es' || typeof s !== 'string') return s;
  const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/), core = m[2];
  if (!core) return s;
  let out = trExact(core);
  if (out === undefined) out = trList(core, false);
  return out === undefined ? s : m[1] + out + m[3];
}
/* the single place every element passes through */
const __createElement = React.createElement;
const TR_ATTRS = ['title', 'placeholder', 'aria-label'];
React.createElement = function (type, props) {
  if (UI_LANG !== 'es') return __createElement.apply(null, arguments);
  const args = Array.prototype.slice.call(arguments);
  if (props && typeof type === 'string') {
    let p = null;
    TR_ATTRS.forEach(k => { if (typeof props[k] === 'string') { const t = tr(props[k]); if (t !== props[k]) { p = p || { ...props }; p[k] = t; } } });
    if (p) args[1] = p;
  }
  /* text inside a text field is what someone typed — never translate it */
  if (type !== 'textarea' && type !== 'option')
    for (let i = 2; i < args.length; i++) {
      const c = args[i];
      if (typeof c === 'string') args[i] = tr(c);
      else if (Array.isArray(c)) args[i] = c.map(x => typeof x === 'string' ? tr(x) : x);
    }
  return __createElement.apply(null, args);
};
