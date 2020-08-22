var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "north_direction": 0,
            "base": "",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "center": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "maxZoom": 10,
            "name": "Daytime Render",
            "minZoom": 0,
            "last_rendertime": 1598061480,
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "defaultZoom": 1,
            "path": "day"
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "spawn": true
        },
        "cacheTag": "1598061686"
    }
};
