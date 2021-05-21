package com.sohrabsaran.skilldemos.util;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Supplier;
import java.util.stream.Collectors;

public class Util {

  public static String urlToFilePath(URL url) {
    try {
      return (new File(url.toURI())).getAbsolutePath();
    } catch (Exception e) {
      throw new RuntimeException(e);
    }
  }

  public static void deleteNonEmptyFolder(String folderPath) {
    File f = new File(folderPath);
    if (!f.exists()) {
      return;
    }
    alwaysAssert(f.isDirectory());
    try {
      FileUtils.deleteDirectory(f);
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  public static String leftOf(String s, String token) {
    int i = s.indexOf(token);
    if (i == -1) {
      throw new RuntimeException("token '" + token + "' not found in string '" + s + "'!!!");
    }
    return s.substring(0, i);
  }

  public static void forEachFile(String folderPath, Consumer<File> fileProcessorFn) {
    try {
      List<File> files =
          Files.list(Paths.get(folderPath)).map(Path::toFile).collect(Collectors.toList());
      files.forEach(fileProcessorFn);
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  public static void createEmptyFile(String filePath) {
    saveStringToFile(filePath, "");
  }

  public static void alwaysAssert(boolean b) {
    if (b) {
      return;
    }
    throw new RuntimeException("ASSERT FAILED");
  }

  public static void alwaysAssert(boolean b, Supplier<String> msg) {
    if (b) {
      return;
    }
    throw new RuntimeException("ASSERT FAILED - " + msg.get());
  }

  public static boolean fileExists(String filePath) {
    File file = new File(filePath);
    if (!file.exists()) {
      return false;
    }
    alwaysAssert(file.isFile());
    return true;
  }

  public static boolean folderExists(String folderPath) {
    File folder = new File(folderPath);
    if (!folder.exists()) {
      return false;
    }
    alwaysAssert(folder.isDirectory());
    return true;
  }

  public static void createFolderIfItDoesNotExist(String folderPath) {
    if (folderExists(folderPath)) {
      return;
    }
    alwaysAssert((new File(folderPath)).mkdir());
  }

  public static void saveStringToFile(String filePath, String data) {
    try {
      FileUtils.writeStringToFile(new File(filePath), data);
    } catch (Exception e) {
      throw new RuntimeException(e);
    }
  }

  public static void appendLineToFile(String filePath, String data) {
    File file = new File(filePath);
    if (file.length() != 0) {
      data = "\n" + data;
    }
    try {
      FileUtils.writeStringToFile(file, data, Charset.defaultCharset(), true);
    } catch (Exception e) {
      throw new RuntimeException(e);
    }
  }

  public static void deleteFileIfItExists(String filePath) {
    if (fileExists(filePath)) {
      alwaysAssert((new File(filePath)).delete());
    }
  }
}
