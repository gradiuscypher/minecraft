var overviewerConfig = {
    "CONST": {
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "poititle": "Markers",
            "world": "Core01",
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
            "maxZoom": 10,
            "path": "day",
            "last_rendertime": 1597028280,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "imgextension": "png",
            "isOverlay": false,
            "north_direction": 0,
            "name": "Daytime Render",
            "minZoom": 0,
            "base": "",
            "showlocationmarker": true
        }
    ],
    "map": {
        "controls": {
            "pan": true,
            "overlays": true,
            "mapType": true,
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "spawn": true
        },
        "cacheTag": "1597028482",
        "debug": true,
        "north_direction": "lower-left"
    }
};
