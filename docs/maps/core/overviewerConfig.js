var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "name": "Daytime Render",
            "isOverlay": false,
            "maxZoom": 10,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "base": "",
            "minZoom": 0,
            "imgextension": "png",
            "north_direction": 0,
            "last_rendertime": 1598601480,
            "path": "day",
            "showlocationmarker": true,
            "poititle": "Markers",
            "world": "Core01"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "pan": true,
            "coordsBox": true,
            "overlays": true,
            "spawn": true,
            "zoom": true,
            "mapType": true,
            "compass": true
        },
        "cacheTag": "1598601685"
    }
};
