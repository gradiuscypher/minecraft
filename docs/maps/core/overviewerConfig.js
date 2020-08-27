var overviewerConfig = {
    "map": {
        "debug": true,
        "cacheTag": "1598533286",
        "controls": {
            "pan": true,
            "spawn": true,
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "mapType": true,
            "overlays": true
        },
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "base": "",
            "poititle": "Markers",
            "minZoom": 0,
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "defaultZoom": 1,
            "last_rendertime": 1598533080,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "path": "day",
            "isOverlay": false,
            "north_direction": 0,
            "imgextension": "png",
            "maxZoom": 10
        }
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png"
        },
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384
    }
};
