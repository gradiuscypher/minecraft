var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "path": "day",
            "maxZoom": 9,
            "base": "",
            "last_rendertime": 1595588280,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 9,
            "minZoom": 0,
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "name": "Daytime Render",
            "world": "Core01",
            "defaultZoom": 1,
            "north_direction": 0,
            "imgextension": "png"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "pan": true,
            "zoom": true,
            "coordsBox": true,
            "compass": true,
            "mapType": true,
            "overlays": true
        },
        "cacheTag": "1595588482",
        "debug": true
    }
};
