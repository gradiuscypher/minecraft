var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "image": {
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "north_direction": 0,
            "minZoom": 0,
            "base": "",
            "path": "day",
            "last_rendertime": 1599011779,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "isOverlay": false,
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "maxZoom": 8,
            "showlocationmarker": true,
            "world": "world",
            "name": "Daytime Render",
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers"
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1599012167",
        "debug": true,
        "controls": {
            "pan": true,
            "coordsBox": true,
            "overlays": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true
        }
    }
};
