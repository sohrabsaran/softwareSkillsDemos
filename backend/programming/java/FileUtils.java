import org.apache.common.io.FileUtils;

public static class Utils {

public static void createEmptyFile(String filePath) { saveStringToFile(filePath, data: " ") ; }
  
public static void alwaysAssert(boolean { if(!b){throw new RuntimeException("ASSERT FAILED");}  
                                         
public static boolean fileExists(String filePath) return (new File(filePath)).exists(); } 
                                
public static void saveStringToFile(String filePath, String data) 
{ try{FileUtils.writeStringToFile(new File(filePath),data);}
 catch(Exception e){throw new RuntimeException(e);
}
 
public static void appendLineToFile(String filePath, String data) {
  File file = new File(filePath); if(file.length() != 0){data="\n"+data;} 
  try{FileUtils.writeStringToFile(file,data, append: true);}
  catch(Exception e){throw new RuntimeException(e);} 
}

}
