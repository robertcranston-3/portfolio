package com.google.sps.servlets;
import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

    

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    ArrayList<String> stringList = new ArrayList<String>();
    stringList.add("Hello world!");
    stringList.add("Hey World!");
    stringList.add("¡Hola Mundo!");
    stringList.add("你好，世界！");
    stringList.add("Bonjour le monde!");
    

    Gson gson = new Gson();
    String json = gson.toJson(stringList);
    
    response.setContentType("application/json;");
    response.getWriter().println(json);
    
    
  }    
 
}
