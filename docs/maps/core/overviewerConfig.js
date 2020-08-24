var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png"
        }
    },
    "tilesets": [
        {
            "imgextension": "png",
            "minZoom": 0,
            "maxZoom": 10,
            "defaultZoom": 1,
            "world": "Core01",
            "path": "day",
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "isOverlay": false,
            "zoomLevels": 10,
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1598270280,
            "name": "Daytime Render",
            "showlocationmarker": true
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598270485",
        "controls": {
            "pan": true,
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "overlays": true,
            "mapType": true,
            "spawn": true
        }
    }
};
