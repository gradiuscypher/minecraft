var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png"
        },
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "minZoom": 0,
            "poititle": "Markers",
            "imgextension": "png",
            "isOverlay": false,
            "base": "",
            "world": "Core01",
            "zoomLevels": 10,
            "maxZoom": 10,
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
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "path": "day",
            "last_rendertime": 1598230680,
            "north_direction": 0,
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "overlays": true,
            "pan": true,
            "mapType": true
        },
        "cacheTag": "1598230884",
        "north_direction": "lower-left"
    }
};
