package ut.com.pramodh.example.myPlugin;

import org.junit.Test;
import com.pramodh.example.myPlugin.api.MyPluginComponent;
import com.pramodh.example.myPlugin.impl.MyPluginComponentImpl;

import static org.junit.Assert.assertEquals;

public class MyComponentUnitTest
{
    @Test
    public void testMyName()
    {
        MyPluginComponent component = new MyPluginComponentImpl(null);
        assertEquals("names do not match!", "myComponent",component.getName());
    }
}