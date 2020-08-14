var overviewerConfig = {
    "CONST": {
        "image": {
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "tileSize": 384
    },
    "tilesets": [
        {
            "base": "",
            "imgextension": "png",
            "isOverlay": false,
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "defaultZoom": 1,
            "north_direction": 0,
            "path": "day",
            "name": "Daytime Render",
            "world": "Core01",
            "poititle": "Markers",
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1597381080,
            "maxZoom": 10,
            "zoomLevels": 10
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "cacheTag": "1597381282",
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "pan": true,
            "overlays": true,
            "zoom": true,
            "mapType": true,
            "compass": true,
            "spawn": true
        },
        "debug": true
    }
};
